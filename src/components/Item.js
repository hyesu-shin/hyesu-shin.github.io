import Component from "../core/Component.js";
import firebase from "../firebase";

export default class Item extends Component {

    template() {
        return `
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <p class="has-text-grey">아이템임 ! 마크다운 파일 들어갈 예정</p>                                
                    </div>
                </div>
            </div>
        `
    }

    mounted() {
        const { contentId } = this.$props;

        this.getContentFile(contentId);
        this.getStorageFile();
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

    // firebase storage 접근
    // 테스트용 contentId : 5TjyzOIrBZ6Xrn6Kpp34
    getStorageFile () {
        firebase.storage.ref('/test').listAll().then((doc) =>{
            doc.items.forEach((ref) => {
                console.log(ref.getDownloadURL());
            })
        });
    }

}
