import {useState} from 'react';


export default function() {


    const [StopScroll, setStopScroll] = useState(false);
    () => setStopScroll(!StopScroll);
}