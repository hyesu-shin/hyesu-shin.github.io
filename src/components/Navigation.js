import Component from "../core/Component.js";
import firebase from "../firebase";

// 라우팅에 따라 카테고리별 리스트로 이동
export default class Navigation extends Component {

    setup() {
        this.$state = ['웹개발', '앱개발', '프론트엔드', '백엔드', '기타'];
    }

    template() {
        return `
            <div class="tile">
                <div class="nav-wrap ml-6">
                    <ul>
                    ${this.$state.map((item, key) => ` 
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
        const a = this.$target;
        console.log(a);
        const database = firebase.database;

        database.collection('categories').get().then((response) => {
           response.forEach((doc) => {
               console.log(doc.id, doc.data().name);
           });
        });
        // console.log(this.$target);
        // console.log(this.$state);
    }

    setEvent() {
        // 카테고리 클릭 이벤트
        this.addEvent('click', '.category', ({target}) => {
           console.log(target.innerHTML);
        });
    }
}
