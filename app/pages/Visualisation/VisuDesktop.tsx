
import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router';
import { VideoContext } from '@/contexts/VideoAPI/VideoContext';
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