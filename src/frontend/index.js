import "./index.sass";
import { View } from "./components/view"
import { Game } from "./pages/game";

const app = document.getElementById("app");

const view = View();
const game = Game();

app.append(view);
view.setContent(game);
game.init();
