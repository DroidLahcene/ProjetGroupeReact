import ShortList from "@/component/ShortList.tsx/ShortList";
import { VideoProvider } from "@/contexts/VideoAPI/VideoContext";
export default function Shorts() {



    return (
        <>
            <VideoProvider>
                <ShortList />
            </VideoProvider>
        </>
    );



}