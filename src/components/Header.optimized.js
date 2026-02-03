import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = ({ setHeaderHeight }) => {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname;
    const headerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) setNavOpen(false);
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);

    const isLinkActive = (href, parentPaths = []) => {
        const pathsToCheck = [href, ...parentPaths];
        return pathsToCheck.some(path => currentPath.startsWith(path));
    };

    return (
        <div className={styles.headerWrapper}>
            <header ref={headerRef} className={`${styles.header}`}>
                <div className={`d-flex w-100 m-0 ${styles.header_left_content}`}>
                    <div className={`col-auto ${styles.logo}`}>
                        <a href='/'>
                            {/* <Image
                                src="/images/logo.svg"
                                width={200}
                                height={80}
                                alt='Ignited Training Institute'
                                priority
                                fetchPriority="high"
                                sizes="(max-width: 768px) 150px, 200px"
                            /> */}
                            <svg width="200" height="80" viewBox="0 0 478 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M246.7 0.244965C241.5 1.24496 237.2 5.14497 235.3 10.545C235 11.545 234.8 12.645 234.8 14.645C234.8 18.945 236 21.945 239.1 24.945C242.1 27.945 245.3 29.245 249.6 29.245C257.5 29.245 264 22.645 264 14.745C264 12.145 263.6 10.545 262.5 8.14496C259.8 2.34496 253.1 -0.955035 246.7 0.244965Z" fill="#373435" />
                                <path d="M273 14.545V28.445H277.8H282.6V14.545V0.64502H277.8H273V14.545Z" fill="#078FCB" />
                                <path d="M260 33.4449V35.9449H284.7H309.4V33.4449V30.9449H284.7H260V33.4449Z" fill="#373435" />
                                <path d="M0 86.145V135.845H4.8H9.6V86.145V36.4449H4.8H0V86.145Z" fill="#078FCB" />
                                <path d="M65.8 36.6449C54.3 38.1449 43.9 43.4449 35.2 52.4449C27.8 60.0449 23.2 70.1449 22.1 80.8449C20.3 98.3449 27.3 114.445 41.5 125.545C45.6 128.745 52.3 132.245 57.6 133.745C65.6 136.145 75.7 136.345 84.1 134.245C93.1 131.945 102.5 126.145 108.7 118.945C109.8 117.645 110.9 116.345 111.1 116.145C111.7 115.545 111.4 140.045 110.8 143.045C108.8 153.345 103.8 161.645 96.2 167.345C88.1 173.345 78.9 176.245 69.5 175.645C62.6 175.245 56.4 173.245 50.7 169.645C43.7 165.245 39 160.145 35.7 153.145C33.2 147.945 32.1 143.845 31.7 138.445L31.5 136.045H26.7H21.9V137.245C21.9 141.245 23.1 147.545 24.5 151.645C25.6 154.645 27.9 159.245 29.7 162.045C37.3 173.745 48.8 181.745 61.7 184.445C67.9 185.745 75.5 185.645 81.9 184.345C91.6 182.245 101.2 176.845 107.4 169.845C115.3 160.945 119.8 151.245 120.9 140.445C121.1 138.645 121.1 128.645 121.1 109.045C121 77.0449 121.1 79.3449 119.3 72.8449C116.1 61.2449 108.7 51.0449 98.5 44.4449C92.3 40.4449 84.7 37.6449 77 36.6449C74.6 36.3449 68.2 36.4449 65.8 36.6449ZM77.3 46.7449C83.2 47.5449 87.6 49.1449 92.5 52.1449C100.7 57.2449 106.2 64.2449 109.3 73.5449C110.8 78.0449 111.2 80.6449 111.2 86.2449C111.2 91.4449 110.8 94.4449 109.4 98.8449C108.4 101.945 105.8 107.145 103.8 109.945C99.2 116.345 92 121.445 83.7 124.245C78 126.045 71 126.545 64.9 125.445C56.3 123.945 47.1 118.745 41.7 112.345C31.6 100.345 29 85.0449 34.7 71.3449C37.1 65.5449 39.9 61.4449 44.2 57.4449C50.8 51.1449 58.3 47.6449 67.4 46.5449C69.1 46.2449 74.9 46.4449 77.3 46.7449Z" fill="#078FCB" />
                                <path d="M176.3 36.745C163.6 38.545 151.6 45.445 144.1 55.245C139.3 61.545 135.6 69.445 134.1 76.545C133.2 81.245 133.1 84.045 133.1 110.245V135.745H137.9H142.7L142.8 108.845C142.9 85.145 142.9 81.645 143.3 79.745C144.9 71.145 149.3 62.845 155.4 57.245C161 52.045 167.4 48.645 174.8 47.045C178.3 46.245 186.6 46.245 190 46.945C197.9 48.545 204.2 51.745 209.9 57.045C215.9 62.645 219.9 69.645 221.8 77.945C222.3 80.245 222.3 80.745 222.4 108.045L222.5 135.845H227.4H232.4V109.145C232.4 80.145 232.4 80.245 231 74.745C230.3 71.945 228.6 67.645 227 64.445C219.9 50.245 206.2 40.045 190.4 37.045C187.6 36.445 179.4 36.345 176.3 36.745Z" fill="#078FCB" />
                                <path d="M244.4 86.145V135.845H249.4H254.4V86.145V36.4449H249.4H244.4V86.145Z" fill="#373435" />
                                <path d="M421.5 36.6449C409.9 38.1449 399.2 43.5449 391 52.0449C383.9 59.4449 379.1 70.1449 378 80.7449C377 90.2449 378.6 99.2449 382.8 107.945C387.7 118.245 395.2 125.645 405.8 130.745C418.6 136.845 433.2 137.245 446.3 131.645C459.1 126.245 469.8 115.245 474.3 102.845L474.9 101.045H469.4C465.6 101.045 463.9 101.145 463.9 101.345C463.9 101.945 461.5 106.445 459.9 108.945C457.7 112.345 453.1 116.945 449.9 119.145C444.3 122.945 438.2 125.045 430.9 125.745C420.1 126.645 409.2 122.945 400.4 115.345C393.8 109.645 389.5 101.645 387.5 91.7449L387.3 90.9449H432.2H477.1L477 85.6449C476.9 80.0449 476.6 77.8449 475.3 73.1449C473.1 64.7449 469 57.5449 462.9 51.3449C454.8 43.0449 444.5 38.0449 432.8 36.5449C430.5 36.3449 423.9 36.4449 421.5 36.6449ZM434.9 46.9449C443.5 48.6449 452 53.6449 457.8 60.3449C462.4 65.7449 465 70.9449 466.6 77.9449C466.9 79.5449 467.2 80.9449 467.2 81.1449C467.2 81.3449 456.8 81.4449 427.3 81.4449H387.4L387.6 80.5449C388.5 75.1449 391.1 68.7449 394.2 64.0449C396 61.2449 400.6 56.5449 404 54.0449C406.7 52.0449 412.7 48.9449 415.6 48.0449C417.5 47.4449 420.6 46.8449 422.8 46.5449C424.7 46.2449 432.9 46.5449 434.9 46.9449Z" fill="#078FCB" />
                                <path d="M260 41.845V44.345H284.7H309.4V41.845V39.345H284.7H260V41.845Z" fill="#373435" />
                                <path d="M260 50.0449V52.5449H284.7H309.4V50.0449V47.5449H284.7H260V50.0449Z" fill="#373435" />
                                <path d="M260 61.345V66.145H266.5H273V77.245C273 83.345 273.1 89.645 273.3 91.145C274.2 100.145 277.5 108.645 282.9 116.045C284.6 118.345 288.7 122.545 291 124.445C303.9 135.045 322.1 138.345 337.9 133.145C348.4 129.645 357.9 122.445 364 113.245C365.8 110.545 368.3 105.545 369.4 102.645C371.1 97.745 372.1 92.345 372.1 88.245V86.145H367.3H362.5V87.645C362.5 89.745 361.9 93.945 361.1 96.545C359.1 103.445 354.7 110.645 349.6 115.145C344.2 119.945 337.1 123.645 330.6 124.945C320 127.045 309.8 124.945 300.4 118.845C296.7 116.445 292.2 111.845 289.7 108.145C285.8 102.245 283.7 96.445 283 89.645C282.9 88.345 282.8 82.545 282.8 76.645V66.245H296.2H309.6V61.445V56.645H284.9H260.2V61.345H260Z" fill="#078FCB" />
                                <path d="M214.2 143.845C213 145.045 213.4 146.945 214.9 147.545C215.6 147.845 215.9 147.845 216.6 147.545C218.9 146.545 218.2 143.145 215.8 143.145C215.2 143.245 214.7 143.445 214.2 143.845Z" fill="#373435" />
                                <path d="M250 143.845C248.8 144.945 249.2 146.945 250.6 147.545C252.2 148.145 253.8 147.145 253.8 145.445C253.8 143.545 251.4 142.545 250 143.845Z" fill="#373435" />
                                <path d="M324.3 143.845C323.5 144.645 323.5 146.145 324.2 147.045C325.5 148.545 328.1 147.545 328.1 145.545C328.1 143.545 325.6 142.445 324.3 143.845Z" fill="#373435" />
                                <path d="M393.8 143.845C393.3 144.345 393.1 144.645 393.1 145.445C393.1 147.645 395.6 148.645 397 146.945C397.6 146.245 397.7 145.945 397.6 145.245C397.3 143.345 395.2 142.645 393.8 143.845Z" fill="#373435" />
                                <path d="M164.2 147.545L162.6 148.045L162.5 150.845L162.4 153.645H160.4H158.4V155.145V156.645H160.4H162.4L162.5 164.745C162.6 172.645 162.6 172.945 163.1 173.945C163.8 175.345 164.9 176.145 166.4 176.545C167.7 176.845 169.8 176.745 170.9 176.345C171.5 176.145 171.6 176.045 171.6 174.645V173.145L170.7 173.545C169.6 173.945 168.2 173.845 167.2 173.245C166 172.445 165.9 171.745 165.9 163.945V156.745H168.8H171.7V155.245V153.745H168.8H166L165.9 150.445L165.8 147.145L164.2 147.545Z" fill="#373435" />
                                <path d="M381.5 147.545L379.9 148.045L379.8 150.845L379.7 153.645H377.7H375.7V155.145V156.645H377.7H379.7V164.145C379.7 170.145 379.8 171.945 380.1 172.945C380.9 175.645 382.5 176.645 385.7 176.645C388.6 176.645 388.9 176.445 388.9 174.545V173.045L387.8 173.445C385.9 174.145 383.9 173.345 383.4 171.545C383.3 171.045 383.2 167.645 383.2 163.645V156.645H386.1H389V155.145V153.645H386.1H383.3L383.2 150.345L383.1 147.045L381.5 147.545Z" fill="#373435" />
                                <path d="M407.1 147.545L405.5 148.045L405.4 150.845L405.3 153.645H403.3H401.3V155.145V156.645L403.2 156.745L405.1 156.845L405.2 164.945C405.3 170.345 405.4 173.245 405.6 173.645C406.2 175.045 407.4 176.045 408.9 176.545C410.4 176.945 412.5 176.945 413.7 176.445C414.3 176.245 414.4 176.145 414.4 174.745V173.245L413.5 173.645C412.4 174.045 410.6 173.945 409.9 173.245C408.8 172.345 408.7 171.645 408.7 164.045V156.845H411.6H414.5V155.345V153.845H411.6H408.8L408.7 150.545L408.6 147.245L407.1 147.545Z" fill="#373435" />
                                <path d="M447.1 147.545L445.5 148.045L445.4 150.845L445.3 153.645H443.5H441.6V155.145V156.645H443.5H445.4V164.045C445.4 171.845 445.5 173.145 446.5 174.645C447.4 176.145 448.8 176.645 451.3 176.645C454.2 176.645 454.5 176.445 454.5 174.545V173.045L453.6 173.445C451.9 174.145 450.1 173.645 449.3 172.245C448.9 171.545 448.9 170.645 448.8 164.045L448.7 156.645H451.6H454.5V155.145V153.645H451.6H448.8L448.7 150.345L448.6 147.045L447.1 147.545Z" fill="#373435" />
                                <path d="M184 153.545C182.6 153.945 181.1 155.345 180.3 157.045L179.7 158.245L179.6 155.945L179.5 153.645H177.8H176.1V164.945V176.245H177.8H179.5L179.6 169.045C179.7 162.445 179.7 161.845 180.2 160.645C180.8 159.045 181.8 157.745 182.9 157.045C183.7 156.545 186 156.445 187.1 156.845L187.7 157.045V155.245V153.445L186.8 153.245C185.6 153.145 185.4 153.145 184 153.545Z" fill="#373435" />
                                <path d="M196 153.545C195.3 153.745 194 154.145 193.3 154.545L192 155.145V157.045V158.945L192.8 158.345C194.9 156.745 198.2 155.845 200.5 156.345C202.4 156.645 204 159.045 203.8 161.145L203.7 162.145L199.6 162.745C195 163.345 193.4 163.945 191.9 165.145C190.3 166.445 189.7 167.945 189.7 170.345C189.7 172.045 189.8 172.545 190.4 173.645C192.8 177.945 200 178.045 203 173.945L203.7 172.945V174.745V176.545H205.6H207.5L207.4 167.945C207.3 159.845 207.3 159.245 206.8 158.045C205.5 154.845 203.7 153.745 199.6 153.645C198.1 153.145 196.9 153.245 196 153.545ZM203.9 166.645C203.9 168.945 203.6 170.045 202.6 171.345C200.9 173.545 197.7 174.445 195.5 173.245C194 172.445 193.5 171.345 193.6 169.545C193.7 167.745 194.3 166.945 195.7 166.345C196.7 165.945 201.7 164.945 203.4 164.945H204.1V166.645H203.9Z" fill="#373435" />
                                <path d="M232.7 153.645C231.2 154.245 229.9 155.145 229 156.445L228.3 157.445V155.545V153.645H226.4H224.5V164.945V176.245H226.4H228.3V168.945C228.3 164.745 228.4 161.245 228.5 160.745C229.7 156.445 235.2 154.545 238 157.445C239.5 159.045 239.6 159.445 239.6 168.145L239.7 176.145H241.4H243.1V168.045C243.1 159.245 243 158.345 241.8 156.245C241 154.845 239.8 153.945 238.3 153.445C236.6 153.045 234.1 153.145 232.7 153.645Z" fill="#373435" />
                                <path d="M269 153.345C267.5 153.845 266.2 154.645 265.1 156.045L263.8 157.445V155.545V153.645H262.1H260.4V164.945V176.245H262.1H263.8L263.9 168.845C264 161.845 264 161.445 264.5 160.245C265.3 158.345 266.1 157.445 267.6 156.745C269.8 155.645 272.3 155.945 273.8 157.445C275.3 159.045 275.4 159.445 275.4 168.145L275.5 176.145H277.2H278.9L278.8 167.545C278.7 159.445 278.7 158.845 278.2 157.645C277.5 155.845 276.5 154.745 275.1 153.945C274 153.345 273.5 153.245 271.7 153.145C270.6 153.245 269.3 153.245 269 153.345Z" fill="#373435" />
                                <path d="M291.2 153.545C288.6 154.345 286.7 156.045 285.4 158.745C284.5 160.745 284.1 162.745 284.1 165.745C284.1 169.245 284.9 171.945 286.7 173.945C290.1 177.745 297 177.645 300.1 173.745L301.1 172.545V174.945C301.1 179.045 299.9 181.645 297.3 182.945C295.7 183.745 293.3 184.045 291.3 183.745C289.7 183.545 286.6 182.545 286 182.045C285.7 181.845 285.7 182.145 285.7 183.645V185.545L286.8 185.945C290.6 187.345 295 187.445 298.5 186.045C300.2 185.445 302.3 183.545 303.2 181.945C304.6 179.345 304.7 178.545 304.8 165.645L304.9 153.845H303H301.1V155.345V156.845L299.8 155.545C298.8 154.545 298.2 154.145 297.2 153.845C295.5 153.145 292.6 153.045 291.2 153.545ZM297.2 156.645C298.7 157.345 299.7 158.245 300.4 159.745C301 160.945 301 161.245 301 164.445C301 168.545 300.7 169.845 299.2 171.545C297.9 172.945 296.6 173.645 294.9 173.845C292.8 174.045 291.4 173.545 289.9 172.045C288.9 171.045 288.5 170.445 288.1 169.045C287.2 166.245 287.5 162.445 288.7 159.945C289.4 158.645 291.2 156.945 292.3 156.545C293.7 156.045 296.1 156.145 297.2 156.645Z" fill="#373435" />
                                <path d="M343.3 153.345C341.8 153.845 340.5 154.645 339.4 156.045L338.1 157.445V155.545V153.645H336.4H334.6V164.945V176.245H336.3H338L338.1 168.845C338.2 160.845 338.2 160.545 339.7 158.545C341.1 156.545 344.3 155.545 346.6 156.445C347.6 156.845 348.9 158.345 349.3 159.545C349.5 160.145 349.6 163.045 349.7 168.345L349.8 176.245H351.5H353.2L353.1 167.645C353 159.545 353 158.945 352.5 157.745C351.8 155.945 350.8 154.845 349.4 154.045C348.3 153.445 347.8 153.345 346 153.245C344.8 153.245 343.6 153.245 343.3 153.345Z" fill="#373435" />
                                <path d="M363.9 153.545C361 154.345 358.9 156.445 358.5 158.745C358.1 161.645 359.5 163.845 362.9 165.445C369.1 168.245 369.6 168.645 369.6 170.745C369.6 172.645 367.9 173.745 364.9 173.745C363.3 173.745 360.8 173.045 359.5 172.245C359.1 171.945 358.6 171.745 358.6 171.745C358.5 171.745 358.5 172.545 358.5 173.545V175.445L359.9 175.945C361.8 176.645 366.6 176.745 368.6 176.045C371.6 175.045 373.3 172.945 373.3 170.245C373.3 168.245 373.1 167.545 372.1 166.445C371.1 165.245 369.9 164.545 367.3 163.445C364 162.045 363.3 161.645 362.8 160.745C362.1 159.545 362.2 158.245 363.1 157.245C364 156.245 365.1 155.845 367.1 155.845C368.5 155.845 371.6 156.645 371.9 157.045C372.3 157.745 372.5 157.145 372.5 155.545L372.4 153.745L371.4 153.345C369.7 153.145 365.5 153.145 363.9 153.545Z" fill="#373435" />
                                <path d="M465.1 153.545C463.5 154.045 462 155.045 460.8 156.345C458.6 158.645 457.8 161.145 457.8 165.245C457.8 170.745 459.9 174.545 463.8 176.045C466.8 177.145 471.4 176.845 474.5 175.345L475.8 174.745V173.045V171.345L474.8 171.945C472.3 173.545 468.8 174.245 466.2 173.445C463.6 172.645 461.9 170.445 461.4 167.045L461.2 165.845H469.2H477.2L477.1 163.245C476.9 158.545 475.4 155.645 472.3 154.145C470.8 153.445 470.4 153.345 468.4 153.245C466.9 153.145 465.7 153.245 465.1 153.545ZM470.1 156.545C472 157.345 473.1 159.045 473.3 161.445L473.4 162.845H467.3H461.2L461.3 162.045C461.7 159.745 463.8 157.045 465.6 156.445C467 156.045 469.1 156.145 470.1 156.545Z" fill="#373435" />
                                <path d="M214.1 164.945V176.245H215.8H217.5V164.945V153.645H215.8H214.1V164.945Z" fill="#373435" />
                                <path d="M249.9 164.945V176.245H251.6H253.3V164.945V153.645H251.6H249.9V164.945Z" fill="#373435" />
                                <path d="M324.1 164.945V176.245H325.8H327.5V164.945V153.645H325.8H324.1V164.945Z" fill="#373435" />
                                <path d="M393.4 164.945V176.245H395.1H396.8V164.945V153.645H395.1H393.4V164.945Z" fill="#373435" />
                                <path d="M418.6 161.945C418.7 171.145 418.8 171.945 420.4 174.145C422.1 176.445 425.8 177.445 429.1 176.445C430.3 176.145 430.8 175.745 432.1 174.445L433.7 172.845V174.545V176.245H435.4H437.1V164.945V153.645H435.4H433.7V160.545C433.7 168.045 433.5 169.445 432.4 171.145C430.4 174.045 426.3 174.645 423.9 172.245C422.4 170.745 422.2 169.845 422.1 161.245L422 153.645H420.3H418.6V161.945Z" fill="#373435" />
                            </svg>
                        </a>
                    </div>

                    <nav
                        className={`col ${styles.nav} ${navOpen ? 'd-flex flex-column position-absolute top-100 start-0 w-100 bg-white  p-4 px-5 z-3' : 'd-none'} d-lg-flex flex-lg-row position-lg-static w-lg-auto bg-lg-none shadow-lg-none p-lg-0 z-lg-auto`}
                        style={navOpen ? { left: 0 } : {}}
                    >
                        <a className={`${styles.link} ${isLinkActive('/') ? styles.activeLink : ''}`} href="/">Home</a>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/ib-curriculum-tutors-in-dubai') || isLinkActive('/courses/ibdp-tutors-in-dubai') || isLinkActive('/courses/myp-tutors-in-dubai') || isLinkActive('/british-curriculum-tutors-in-dubai') || isLinkActive('/courses/a-level-tutors-in-dubai') || isLinkActive('/courses/igcse-tutors-in-dubai') || isLinkActive('/courses/homeschooling-tutors-in-dubai') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >
                                high school courses
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuLeft}>
                                        <h3><span>01</span> <a href='/ib-curriculum-tutors-in-dubai'>International baccalaureate<div><img src="/images/btn-arrow.webp" alt="Arrow" loading="lazy" width="20" height="20" /></div></a></h3>
                                        <a href='/courses/ibdp-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/ibdp-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/header-menu1.webp" alt="IBDP" loading="lazy" />
                                            <h4>IBDP</h4>
                                        </a>
                                        <a href='/courses/myp-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/myp-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/header-menu2.webp" alt="MYP" loading="lazy" />
                                            <h4>MYP</h4>
                                        </a>
                                    </div>
                                    <div className={styles.megaMenuLeft}>
                                        <h3><span>02</span> <a href='/british-curriculum-tutors-in-dubai'>British curriculum<div><img src="/images/btn-arrow.webp" alt="Arrow" loading="lazy" width="20" height="20" /></div></a></h3>
                                        <a href='/courses/a-level-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/a-level-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/header-menu3.webp" alt="A-LEVELS" loading="lazy" />
                                            <h4>A LEVELS</h4>
                                        </a>
                                        <a href='/courses/igcse-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/courses/igcse-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/header-menu4.webp" alt="I/GCSE" loading="lazy" />
                                            <h4>I/GCSE</h4>
                                        </a>
                                    </div>
                                    <div className={styles.megaMenuLeft}>
                                        <h3><span>03</span><a href='/courses/homeschooling-tutors-in-dubai'> Homeschooling<div><img src="/images/btn-arrow.webp" alt="Arrow" loading="lazy" width="20" height="20" /></div></a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/act-tutors-in-dubai') || isLinkActive('/advanced-placements-tutors-in-dubai') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >
                                standardised tests
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuRight}>
                                        <a href='/act-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/act-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-act.webp" alt="ACT" loading="lazy" />
                                            <h4>ACT</h4>
                                        </a>
                                        <a href='/advanced-placements-tutors-in-dubai' className={`${styles.megaMenuBox} ${isLinkActive('/advanced-placements-tutors-in-dubai') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-ap.webp" alt="AP" loading="lazy" />
                                            <h4>AP</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/join-free-demo-class" className={`${styles.link} ${isLinkActive('/join-free-demo-class') ? styles.activeLink : ''}`}>
                            get a free demo
                        </a>
                        <div className={styles.megaMenuWrapper}>
                            <a
                                href="#"
                                className={`${styles.link} ${isLinkActive('/about-us') || isLinkActive('/blog') || isLinkActive('/our-team') || isLinkActive('/contact-us') || isLinkActive('/career') ? styles.activeLink : ''}`}
                                onClick={e => e.preventDefault()}
                            >
                                about
                            </a>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.megaMenuRight}>
                                        <a href='/blog' className={`${styles.megaMenuBox} ${isLinkActive('/blog') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-blog.webp" alt="Blog" loading="lazy" />
                                            <h4>Blog</h4>
                                        </a>
                                        <a href='/about-us' className={`${styles.megaMenuBox} ${isLinkActive('/about-us') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-about.webp" alt="About Us" loading="lazy" />
                                            <h4>About Us</h4>
                                        </a>
                                        <a href='/our-team' className={`${styles.megaMenuBox} ${isLinkActive('/our-team') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-team.webp" alt="Our Team" loading="lazy" />
                                            <h4>Our Team</h4>
                                        </a>
                                        <a href='/contact-us' className={`${styles.megaMenuBox} ${isLinkActive('/contact-us') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-contact.webp" alt="Contact Us" loading="lazy" />
                                            <h4>Contact Us</h4>
                                        </a>
                                        <a href='/career' className={`${styles.megaMenuBox} ${isLinkActive('/career') ? styles.activeLink : ''}`}>
                                            <Image height={25} width={30} src="/images/menu-career.webp" alt="Career" loading="lazy" />
                                            <h4>Career</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className={`d-flex justify-content-end m-0 ${styles.header_right_content}`}>
                    <div className="col-auto p-0 d-sm-block">
                        <a href="tel:+971568357374">
                            <button>
                                <Image src="/images/mobile.webp" width={25} height={25} alt="Call" loading="lazy" />
                                Call
                            </button>
                        </a>
                    </div>
                    <div className="col-auto p-0 d-sm-block">
                        <a href="https://wa.me/+971568357374">
                            <button>
                                <Image src="/images/whatsapp.webp" width={25} height={25} alt='Whatsapp' loading="lazy" />
                                Whatsapp
                            </button>
                        </a>
                    </div>
                    <button
                        className={`d-lg-none ${styles.toggleButton}`}
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setNavOpen((open) => !open)}
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        <Image src="/images/hamburger.webp" width={35} height={35} alt='Hamburger' loading="lazy" />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
