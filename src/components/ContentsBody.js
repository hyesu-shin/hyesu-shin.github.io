import Component from "../core/Component.js";
import Contents from "./Contents.js";
import Navigation from "./Navigation.js";

export default class ContentsBody extends Component {
    setup() {
    }

    template() {
        return `
            <div class="has-background-white-ter">
                <section class="container">
                    <div class="contents-wrap">
                        <div class="tile is-ancestor">
                            <contents class="tile is-parent is-9 mt-6 mb-6" data-component="contents"></contents>
                            <navigation class="tile is-parent border-left is-3" data-component="navigation"></navigation>
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
}
