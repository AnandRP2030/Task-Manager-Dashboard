import { Canvas } from "../components/canvas/canvas";
import { Header } from "../components/header/header";
import "./dashboard.css";

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="header-container">
                <Header />
            </div>

            <div className="canvas-container">
                <Canvas />
            </div>
        
        </div>
    )
}