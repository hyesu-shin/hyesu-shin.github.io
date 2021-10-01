import Component from "../core/Component.js";
import { historyRoutePush } from "../core/Router.js";

export default class Lists extends Component {

    template() {
        const { listItems } = this.$props;
        // console.log('props로 전달되는 리스트 아이템', listItems);

        return `
            <div class="list-wrap">
                <ul>
                    ${listItems.map((item, key) => `
                        <li id="item" class="box" route="/item">
<!--                            <figure class="image is-64x64">-->
<!--                            -->
<!--                            </figure>-->
                            ${item.contentName}
                            ${item.category}
                            ${key}
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
        const { listItems } = this.$props;

        this.addEvent('click', '#item', ({target}) => {
            const $route = target.getAttribute('route');

            historyRoutePush($route,
                $contents,
                {
                    listItems: listItems,
                    params: ''
                });
        });
    }
}
