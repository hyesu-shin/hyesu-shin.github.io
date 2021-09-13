import Component from "../core/Component.js";

// 라우팅에 따라 카테고리별 리스트로 이동
export default class Navigation extends Component {

    setup() {
        this.$state = ['type1', 'type2'];
    }

    template() {
        return `
            <div class="tile mt-6">
                <div class="nav-wrap ml-4">
                    <ul>
                    ${this.$state.map((item, key) => ` 
                        <li id="item">
                            <a href="#">${item}</a>
                        </li>
                    `).join('')}
                    </ul>
                </div>
            </div>
        `
    }

    mounted() {
        console.log(this.$target);
        console.log(this.$state);
    }
}
