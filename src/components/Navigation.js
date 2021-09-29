import Component from "../core/Component";
import firebase from "../firebase";

// 라우팅에 따라 카테고리별 리스트로 이동
export default class Navigation extends Component {

    template() {
        const { navigation } = this.$props;

        return `
            <div class="tile">
                <div class="nav-wrap ml-6">
                    <ul>
                    ${navigation.map((item, key) => ` 
                        <li class="category-list" id="item">
                            <a class="category" data-index="${key}">${item}</a>
                        </li>
                    `).join('')}
                    </ul>
                </div>
            </div>
        `
    }

    mounted() {
        const database = firebase.database;

        database.collection('categories').get().then((response) => {
           response.forEach((doc) => {
               // console.log(doc.id, doc.data().name);
           });
        });

        // console.log(this.$target);
    }

    setEvent () {
        // 카테고리 클릭 이벤트
        this.addEvent('click', '.category', ({target}) => {
           let name = target.innerHTML;
           this.getCategoryInfo(name);

            /**
             * TODO
             *
             * 1. 내비게이션 리스트 클릭하면 contents.js 에 이벤트 전달
             * 2. 클릭한 카테고리에 해당하는 문서 id 값, 카테고리 이름을 contents.js 에 props 로 전달
             * 3. contents.js 에서는 listItems 를 갱신 후 페이지 재랜더링
             */

        });
    }

    // 카테고리 정보 받아오는 함수
    getCategoryInfo(_name) {

        let categoryData = firebase.database.collection('categories').where("name", "==", _name)
            .get()
            .then((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                    this.getContentList(doc.id);
                })
            })
            .catch((error) => {
                console.log("Error getting documents", error)
            });
    }

    // categoryId 와 매칭되는 content list 받아오는 함수
    getContentList (_id) {
        const { getSelectedContentList } = this.$props;

        firebase.database.collection('contents').where("category", "==", _id)
            .get()
            .then((querySnapShot) => {
                let contentList = []
                querySnapShot.forEach((doc) => {
                    // console.log(_id, doc.data());
                    contentList.push(doc.data())
                })
                getSelectedContentList(contentList);
            })
            .catch((error) => {
                console.log("Error getting documents", error)
            })
    }
}
