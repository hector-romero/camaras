import {config} from "@/config";

interface CameraSRC {
    src: string,
    w: number,
    h: number
}

export interface Camera {
    name: string,
    hd: CameraSRC,
    sd: CameraSRC
}


const get_src = (id: number, width: number, height: number): CameraSRC => {
    // TODO use pinia
    const url_params = new URLSearchParams(window.location.search);
    return {
        src: `${config.ZONEMINDER_HOST}/cgi-bin/nph-zms?monitor=${id}&method=mpeg&scale=100&${url_params.toString()}` ,
        w: width,
        h: height
    }
};


const cameras: Camera[] = [
    {
        name: 'Vereda 1',
        hd: get_src(3, 1920, 1080),
        sd: get_src(5, 704, 480)
    },
    {
        name: 'Vereda 2',
        hd: get_src(4, 1920, 1080),
        sd: get_src(6, 640, 480)
    },
    {
        name: 'Patio 1',
        hd: get_src(7, 2688, 1520),
        sd: get_src(8, 704, 576)
    }
];

export default cameras;

