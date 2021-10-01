import Component from "../core/Component.js";
import { historyRoutePush } from "../core/Router.js";

export default class Lists extends Component {
    setup() {
        this.$state = this.$props;
    }

    template() {
        const { listItems } = this.$state;
        // console.log('props로 전달되는 리스트 아이템', listItems);

        return `
            <div class="list-wrap">
                <ul>
                    ${listItems.map((item, key) => `
                        <li id="item" class="box" route="/item">
<!--                            <figure class="image is-64x64">-->
<!--                            -->
<!--                            </figure>-->
                            <div id="ddd">
                                <div>${item.contentName}</div>
                                <div>${item.category}</div>
                                <div id="content-mdFile">${item.mdFile}</div>
                                <div>${key}</div>
                            </div>
                            
                        </li>
                    `).join('')}
                </ul>        
            </div>
        `
    }

    mounted() {

    }

    // 모든 이벤트를 this.target 에 등록하여 사용
    setEvent() {
        const $contents = this.$target;
        const { listItems } = this.$state;

        this.addEvent('click', '#item', ({target}) => {
            // const $route = target.getAttribute('route');
            console.log(target);
            const a = target.querySelector('#ddd');

            historyRoutePush('/item',
                $contents,
                {
                    listItems: listItems,
                    params: a
                });
        });
    }
}
