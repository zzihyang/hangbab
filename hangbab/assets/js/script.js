window.onload = function () {


    /*****************헤더 스크립트******************/

    const depth1 = $('.depth1');
    const header = $('#header');

    depth1.on('mouseenter', function () {
        header.addClass('on');
    })
    header.on('mouseleave', function () {
        header.removeClass('on');
    })



    /****************SUB 페이지 공통******************/

    const h2 = $('.tit_box h2')
    const p = $('.tit_box p')

    h2.css({ 'margin-left': '0', 'opacity': '1' })
    setTimeout(function () {
        p.css({ 'margin-left': '0', 'opacity': '1' })
    }, 100)



    /****************FAQ 페이지******************/

    const faqBx = $('.faq_box')
    const faqLi = faqBx.find('li')
    const faqDd = faqLi.find('dd')

    faqLi.on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            faqLi.removeClass('active')
            $(this).addClass('active')
        }
    });



    /****************메뉴소개 페이지******************/

    const tabMenuLi = $('.menu_list_box #tab_menu li');
    const menuContents = $('.list_wrap').children();

    tabMenuLi.on('click', function (e) {
        const href = $(this).children('a').attr('href');
        const menuChosse = $('#' + href);

        e.preventDefault();

        tabMenuLi.removeClass('active');
        $(this).addClass('active');

        menuContents.hide();
        menuChosse.slideDown(300);
    });

    
    /****************메뉴 페이지******************/
    //메뉴 tab을 누르면 상단 내용 변경

    const menuLi = $(".menu_li span")
    const menuKo = $(".menu_ko")
    const menuEn = $(".menu_en")

    $('#tab_menu li a').click(function(){
        let koText = $(this).text();
        let enText = $(this).attr('href');

        $(menuLi).text(koText)
        $(menuKo).text(koText)
        $(menuEn).text(enText)

    })
    



    /****************로그인 페이지******************/

    $('#loginForm').on('submit', function () {
        const idV = $('#userId').val()
        const pwV = $('#pw1').val()

        //id 입력 스크립트

        if (idV.length == 0) {
            //아이디를 입력하지 않은 경우
            $('.id_msg').css('display', 'block')
            $('.id_msg').html('<em>아이디를 입력하세요</em>')
            $('#userId').css('border-color', '#FF0000')
            $('#userId').focus()
            return false;

        } else if (idV.length >= 1 && idV !== 'sayhello') {
            //정해진 답변과 다를 때
            alert('아이디를 확인하세요')
            $('.id_msg').css('display', 'block')
            $('.id_msg').html('<em>아이디를 확인하세요</em>')
            $('#userId').css('border-color', '#FF0000')
            $('#userId').focus()
            return false;

        } else if (idV == 'sayhello') {
            $('.id_msg').css('display', 'none')
            $('#userId').css({ 'border-color': '#8B8B8B', 'background-color': '#fff' })

            //pw 입력 스크립트
            if (pwV.length == 0) {
                //비밀번호를 입력하지 않은 경우
                $('.pw_msg').css('display', 'block')
                $('.pw_msg').html('<em>비밀번호를 입력하세요</em>')
                $('#pw1').css('border-color', '#FF0000')
                $('#pw1').focus()
                return false;

            } else if (pwV.length >= 1 && pwV !== 'hello') {
                //정해진 답변과 다를 때
                alert('비밀번호를 확인하세요')
                $('.pw_msg').css('display', 'block')
                $('.pw_msg').html('<em>비밀번호를 확인하세요</em>')
                $('#pw1').css('border-color', '#FF0000')
                $('#pw1').focus()
                return false;

            } else if (pwV == 'hello') {
                $('.pw_msg').css('display', 'none')
                $('#pw1').css({ 'border-color': '#8B8B8B', 'background': '#fff' })
                return true;
            }
        }
    })



    /****************회원가입 1 페이지******************/

    // 전체약관동의
    $('#chkAll').on('click', function () {
        let chk = $('#chkAll').is(':checked')

        if (chk) {
            $('input[type=checkbox]').prop('checked', true)
            console.log()
        } else {
            $('input[type=checkbox]').prop('checked', false)
        }
    })

    //개별 약관동의
    $('.indivi').on('click', function () {
        let indCount = $('.indivi').length
        let indChkCount = $('.indivi:checked').length

        $('#chkAll').prop('checked', indCount == indChkCount)
    })

    // 약관내용보기
    $('.btn_view').on('click', function () {
        $(this).parent().next('.scroll_wrap').slideToggle()
    })

    //다음버튼 클릭 시
    /*
    $('.btn_next').on('click',function(){
        window.location.href='join_step2.html'
    })
    */

    /****************회원가입 2 페이지******************/

    //필수정보 입력
    const userId = $('#userId');
    const pw1 = $('#pw1');
    const pw2 = $('#pw2');
    const userPhone = $('#userPhone');

    //아이디 체크
    userId.on('blur', function () {
        const userIdV = $('#userId').val()

        if (userIdV.length < 8) {
            $('.j2_id_msg').css('display', 'block')
            $('.j2_id_msg').html('<em>아이디를 8자 이상 입력하세요.</em>')
            $('#userId').css('border-color', '#FF0000')
        } else {
            $('.j2_id_msg').css('display', 'none')
            $('#userId').css({ 'border-color': '#8B8B8B', 'background': '#fff' })
        }
    })

    //비밀번호 체크
    pw1.on('blur', function () {
        const pw1V = $('#pw1').val()
        const contE = /[a-zA-Z]/.test(pw1V);
        const contN = /\d/.test(pw1V);

        if (pw1V.length < 8) {
            $('.j2_pw1_msg').css('display', 'block')
            $('.j2_pw1_msg').html('<em>비밀번호를 8자 이상 입력하세요.</em>')
            $('#pw1').css('border-color', '#FF0000')
        } else if (pw1V.length >= 8 && (!contE || !contN)) {
            $('.j2_pw1_msg').css('display', 'block')
            $('.j2_pw1_msg').html('<em>영문과 숫자를 조합하세요.</em>')
            $('#pw1').css('border-color', '#FF0000')
        } else if (pw1V.length >= 8 && contE && contN) {
            $('.j2_pw1_msg').css('display', 'none');
            $('#pw1').css({ 'border-color': '#8B8B8B', 'background': '#fff' });
        }
    })

    pw2.on('blur', function () {
        const pw2V = $('#pw2').val()
        const pw1V = $('#pw1').val()

        if (pw2V !== pw1V) {
            $('.j2_pw2_msg').css('display', 'block')
            $('.j2_pw2_msg').html('<em>비밀번호가 일치하지 않습니다.</em>')
            $('#pw2').css('border-color', '#FF0000')
            $('#pw2').focus()
        } else {
            $('.j2_pw2_msg').css('display', 'none')
            $('#pw2').css({ 'border-color': '#8B8B8B', 'background': '#fff' })
        }

    })
    userPhone.on('blur', function () {
        const userPhoneV = $('#userPhone').val()
        const notContN = /\D/.test(userPhoneV);

        if (notContN) {
            $('.j2_phone_msg').css('display', 'block')
            $('.j2_phone_msg').html('<em>숫자만 입력해주세요.</em>')
            $('#userPhone').css('border-color', '#FF0000')
            $('#userPhone').focus()
        } else if (userPhoneV.length >= 12 || userPhoneV.length < 10) {
            $('.j2_phone_msg').css('display', 'block')
            $('.j2_phone_msg').html('<em>10~11 자리의 숫자를 입력해주세요</em>')
            $('#userPhone').css('border-color', '#FF0000')
            $('#userPhone').focus()
        } else {
            $('.j2_phone_msg').css('display', 'none')
            $('#userPhone').css({ 'border-color': '#8B8B8B', 'background': '#fff' })
        }
    })





    /****************매장 검색 페이지******************/

    //검색옵션
    const schOpt = $('.select_btn')
    const slectOpt = $('.select_btn span')
    const optLi = $('.option_lst li')

    schOpt.on('click', function () {
        $('.select_box').toggleClass('active')
    })

    optLi.on('click', function () {
        $('.select_box').removeClass('active')
        slectOpt.text($(this).text())
    })










}


