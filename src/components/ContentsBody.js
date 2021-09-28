import Component from "../core/Component";
import Contents from "./Contents";
import Navigation from "./Navigation";
import firebase from "../firebase";
import { initialRoutes } from "../core/Router";

export default class ContentsBody extends Component {
    setup() {
        this.$state = {
            navigation: [],
            navigationName: '',
            contents: []
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
        const { getSelectedContentList } = this;
        const $contents = this.$target.querySelector('[data-component="contents"]');
        const $navigation = this.$target.querySelector('[data-component="navigation"]');

        new Contents($contents, {});
        new Navigation($navigation, {
            navigation,
            getSelectedContentList: getSelectedContentList.bind(this)
        });

        // 페이지 초기화
        // initialRoutes('history', $contents, {});
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

    // 카테고리 선택시 선택된 카테고리에 해당하는 컨텐츠 목록 출력 함수
    getSelectedContentList (selectedContents) {
        console.log('제발나와라', selectedContents);
        const { contents } = this.$state;
        // console.log('이건 리스트', contents);
        // this.setState({
        //     contents: [
        //         ...contents,
        //         selectedContents
        //     ]
        // });
    }
}

