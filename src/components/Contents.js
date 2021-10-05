import Component from "../core/Component";
import Lists from "../components/Lists";
import firebase from "../firebase";
import {historyRoutePush, initialRoutes} from "../core/Router";

/**
 *  라우팅에 따라 lists / item 으로 이동
 *  1. url : window.location.origin + pathName
 *  2. url 에 따라 id 가 contents 인 div 영역에 자식 컴포넌트 마운트
 */
export default class Contents extends Component {
    setup() {
        this.$state = {
            items : []
        };
    }

    template() {
        return `
            <div class="tile">
                <div class="list-contents" id="contents"></div>
            </div>
        `
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const { listItems } = this;
        const $contents = this.$target.querySelector('#contents');

        // console.log('얘가 다시?')
        initialRoutes('history', $contents, { listItems });
        // new Lists($contents, { listItems }, true);
    }

    setEvent () {
        this.getListItems();
    }
    get listItems () {
        const { items } = this.$state;
        return items;
    }

    // 전체 리스트 받아오는 함수
    getListItems () {
        const database = firebase.database;
        let list = [];

        database.collection('contents').get().then((response) => {
            response.forEach((doc) => {
                let data = doc.data();
                data['id'] = doc.id

                list.push(data);
                // console.log(doc.id, doc.data().contentName);
            });
            this.setState({
                items: list
            });
        });
    }
}
