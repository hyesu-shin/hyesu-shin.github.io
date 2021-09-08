import Component from "../core/Component.js";

// 라우팅에 따라 카테고리별 리스트로 이동
export default class Navigation extends Component {

    template() {
        return `
            <div class="tile mt-6">
                <div class="nav-wrap ml-4">
                    <h1>이곳은 내비게이션 영역입니다.</h1>
                </div>
            </div>
        `
    }
}
