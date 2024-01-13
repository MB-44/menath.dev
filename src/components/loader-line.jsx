import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
    startNavigationProgress,
    completeNavigationProgress,
    NavigationProgress,
} from '@mantine/nprogress';

export function Loader() {
    const router = useRouter();

    useEffect(() => {
        
    }, [router.asPath]);

    return <NavigationProgress progressLabel="loading-page" size={4} autoReset={true} />;
}