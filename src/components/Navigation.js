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
    }

    setEvent () {
        // 카테고리 클릭 이벤트
        this.addEvent('click', '.category', ({target}) => {
           console.log(target.innerHTML);
           this.getCategoryInfo();

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
    getCategoryInfo () {
        const database = firebase.database;

        let categoryId;
        let categoryName;

        // database.collection('categories')
    }
}
