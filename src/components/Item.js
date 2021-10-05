import Component from "../core/Component.js";
import firebase from "../firebase";
import showdown from "showdown";

export default class Item extends Component {

    template() {
        return `
            <div class="markdown-wrap">
                <div class="markdown-content" id="markdown-content"></div>    
            </div>                    
        `
    }

    mounted() {
        const { mdFile, contentId } = this.$props;

        this.getContentFile(contentId);
        this.getStorageFile(mdFile);
    }

    // 선택된 content 의 md 파일 가져오는 함수
    getContentFile (_contentId) {
        const contentItem = firebase.database.collection("contents").doc(_contentId);

        contentItem.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data());
            } else {
                console.log('No such document!');
            }
        });
    }


    getStorageFile (_mdFile) {
        const ref = firebase.storage.ref(_mdFile);
        ref.getDownloadURL().then((doc) => {
           let fileURL = doc;

           this.HttpFunction(fileURL);
        });
    }

    HttpFunction (_fileURL) {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    let responseData = xhttp.responseText;
                    console.log(responseData)
                    const converter = new showdown.Converter({
                            'strikethrough': true,
                            'simpleLineBreaks': true
                            // 'splitAdjacentBlockquotes': true
                        });
                    const textHtml = converter.makeHtml(responseData);
                    console.log(textHtml);
                    document.querySelector("#markdown-content").innerHTML = textHtml;
                }
            }
        }
        xhttp.open("GET", _fileURL, true);
        xhttp.send(null);
    }

}
