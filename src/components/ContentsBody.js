import Component from "../core/Component";
import Contents from "./Contents";
import Navigation from "./Navigation";
import firebase from "../firebase";
import { initialRoutes, historyRoutePush } from "../core/Router";

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

        new Contents($contents, {}, true);
        new Navigation($navigation, {
            navigation,
            getSelectedContentList: getSelectedContentList.bind(this)
        }, true);

    }

    setEvent () {
        const $contents = this.$target.querySelector('#contents');
        this.getNavigationItems();

        // 이벤트 버블링
        // this.addEvent('click', '.category', ({target}) => {
        //     console.log('navigation 클릭 이벤트 버블링');
        //     console.log(target);
        //     let contents = this.$state.contents;
        //     historyRoutePush('/list', $contents, { contents })
        // });
    }

    get navigation () {
        const { navigation } = this.$state;
        return navigation;
    }

    // 내비게이션 리스트 받아오는 함수
    getNavigationItems () {
        const database = firebase.database;
        let list = ['전체보기'];

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
    getSelectedContentList (contentList, param) {
        const $contents = this.$target.querySelector('#contents');
        console.log('컨텐츠 목록 바인드', contentList);
        console.log(param);
        historyRoutePush('/list',
            $contents,
            {
                listItems: contentList,
                params: '/'+ param
            });
    }
}

