import {
    header
} from '../elements'
import stickybits from 'stickybits';





var browser = {};
//브라우저의 종류 확인
browser.getBroswerName = function () {
    //userAgent값을 모두 소문자로 변환하여 변수에 대입
    var agt = navigator.userAgent.toLowerCase();

    if (agt.indexOf("chrome") != -1) {
        return 'Chrome';
    } else if (agt.indexOf("opera") != -1) {
        return 'Opera';
    } else if (agt.indexOf("firefox") != -1) {
        return 'Firefox';
    } else if (agt.indexOf("safari") != -1) {
        return 'Safari';
    } else if (agt.indexOf("skipstone") != -1) {
        return 'Skipstone';
    }
    //msie는 Expolrer 11d이전 버전, trident는 Explorer 11버전
    else if (agt.indexOf("msie") != -1 || agt.indexOf("trident") != -1) {
        return 'Internet Explorer';
    } else if (agt.indexOf("netscape") != -1) {
        return 'Netscape';
    } else {
        return 'Unknown';
    }
};

const ele = header.self;

// Inter ExPlorer로 접속했을 때 실행
if (browser.getBroswerName() === 'Internet Explorer') {
    window.addEventListener('scroll', () => {
        const y = ele.getBoundingClientRect().top;

        if (y <= 200) {
            ele.classList.add('js-is-sticky');
        }
    })
}

stickybits(ele);