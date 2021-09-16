import Component from "../core/Component.js";
import Contents from "./Contents.js";
import Navigation from "./Navigation.js";

export default class ContentsBody extends Component {
    setup() {
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
        const $contents = this.$target.querySelector('[data-component="contents"]');
        const $navigation = this.$target.querySelector('[data-component="navigation"]');

        new Contents($contents, {});
        new Navigation($navigation, {});
    }

    setEvent() {
        // 클릭 이벤트
        // 이벤트 버블링
        this.addEvent('click','#item', ({target}) => {
            console.log(target);
        });
    }
}
