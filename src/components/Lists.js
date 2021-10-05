import Component from "../core/Component.js";
import { historyRoutePush } from "../core/Router.js";

export default class Lists extends Component {
    // setup() {
    //     this.$state = this.$props;
    // }

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
                            <div>
                                <div id="content-name">${item.contentName}</div>
                                <div id="content-id">${item.id}</div>
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
        const { listItems } = this.$props;

        this.addEvent('click', '#item', ({target, currentTarget}) => {
            // const $route = target.getAttribute('route');
            // console.log('현재 타겟', currentTarget);

            let contentId = target.querySelector('#content-id');
            let contentName = target.querySelector('#content-name');
            let mdFile = target.querySelector('#content-mdFile');

            // 자식 요소가 선택되었을 경우임
            if (contentId === null) {
                let item = target.closest('#item');

                contentId = item.querySelector('#content-id');
                contentName = item.querySelector('#content-name');
                mdFile = item.querySelector('#content-mdFile');
            }

            historyRoutePush('/item',
                $contents,
                {
                    listItems: listItems,
                    mdFile: mdFile.innerHTML,
                    contentId: contentId.innerHTML,
                    params: '/' + contentName.innerHTML
                });
        });
    }
}
