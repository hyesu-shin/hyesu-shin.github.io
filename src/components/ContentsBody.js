import Component from "../core/Component";
import Contents from "./Contents";
import Navigation from "./Navigation";
import firebase from "../firebase";
import { initialRoutes } from "../core/Router";

export default class ContentsBody extends Component {
    setup() {
        this.$state = {
            navigation: []
        };
    }

    template() {
        return `
            <div class="has-background-white-ter border-top">
                <section class="container">
                    <div class="contents-wrap">
                        <div class="tile is-ancestor">
                            <contents class="tile is-parent contents is-9" data-component="contents"></contents>
                            <navigation class="tile is-parent navigation border-left is-3" data-component="navigation"></navigation>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const { navigation } = this;
        const $contents = this.$target.querySelector('[data-component="contents"]');
        const $navigation = this.$target.querySelector('[data-component="navigation"]');

        // new Contents($contents, {});
        new Navigation($navigation, { navigation });

        // 페이지 초기화
        initialRoutes('history', $contents, {});
    }

    setEvent () {
        this.getNavigationItems();
    }

    get navigation () {
        const { navigation } = this.$state;
        return navigation;
    }

    // 내비게이션 리스트 받아오는 함수
    getNavigationItems () {
        const database = firebase.database;
        let list = [];

        database.collection('categories').get().then((response) => {
           response.forEach((doc) => {
               list.push(doc.data().name);
           });
           this.setState({
               navigation: list
           });
        });
    }
}

