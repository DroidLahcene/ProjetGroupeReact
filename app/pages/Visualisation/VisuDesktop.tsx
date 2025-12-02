

import { VideoProvider } from "@/contexts/VideoAPI/VideoContext";
import Visualisation from "@/component/Visualisation/Visualisation";
export default function VisuDesktop() {







    return (
        <> <VideoProvider>
            <Visualisation />
            </VideoProvider>
        </>
    );



}