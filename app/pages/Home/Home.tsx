import { VideoList } from "@/component/VideoList/VideoList";
import { VideoProvider } from "@/contexts/VideoAPI/VideoContext";

export default function Home() {







    return (
        <>
        <VideoProvider>
            <VideoList/>
        </VideoProvider>


        </>
    );



}