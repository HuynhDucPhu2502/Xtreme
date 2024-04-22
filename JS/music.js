$(document).ready(function () {
    var yourPlayList = [];
    $("#footer-void").addClass("visually-hidden");

    $('.spinning-img').addClass('spin');

    $("#searchInput").on({
        input: function () {
            var searchItem = $("#searchInput").val();
            var arr = listFeatured.filter(x => {
                return x.tenNhac.toUpperCase().includes(searchItem.toUpperCase());
            });
            $("#tab-featured").empty();
            loadListSong(arr, "#tab-featured");
        }
    });

    // Thêm nhạc vào play list
    $(document).on("click", ".add_song_to_playlist", function () {
        var tenNhac = $(this).closest('.song').find("h5").text().toUpperCase();
        var checkExist = yourPlayList.some(x => x.tenNhac.toUpperCase() === tenNhac);

        if (checkExist) {
            alert("Bài hát đã tồn tại trong playlist");
            return;
        }

        var nhac = listFeatured.find(x => x.tenNhac.toUpperCase() === tenNhac);
        if (nhac) {
            yourPlayList.push(nhac);
            $("#yourPlaylist-song").empty();
            loadListSongPlayList(yourPlayList, "#yourPlaylist-song");
            alert("Thêm nhạc thành công");
        } else {
            alert("Không tìm thấy bài hát");
        }
    });

    // Xóa nhạc khỏi play list
    $(document).on('click', '.remove_song_from_playlist', function () {
        var tenNhac = $(this).closest('.song').find("h5").text();
        var index = yourPlayList.findIndex(x => x.tenNhac.toUpperCase() === tenNhac.toUpperCase());

        if (index > -1) {
            yourPlayList.splice(index, 1);
            $(this).closest('.song').remove();
        }
    });


    //loading nhac len cac tab ngoai tru tab your playlist
    function loadListSong(arr, id) {
        $(id).empty();  // Làm sạch nội dung hiện tại trước khi thêm mới
        for (var i = 0; i < arr.length; i++) {
            var songHtml =
                '<div class="song row col-12 m-3 ms-0 bg-secondary align-items-center p-1 background-linear-song">' +
                '<div class="index-list col-2 h3">' + (i + 1) + '</div>' +
                '<div class="col-7 d-flex">' +
                '<img src="' + arr[i].img + '" alt="" style="width: 50px;" class="border-img">' +
                '<div class="ms-2">' +
                '<h5>' + arr[i].tenNhac + '</h5>' +
                '<small class="text-white">' + arr[i].casi + '</small>' +
                '</div>' +
                '</div>' +
                '<div class="col-1">' + arr[i].thoiluong + '</div>' +
                '<div class="col-1">' +
                '<button type="button" class="play_song btn text-white" data-song-index="' + (arr[i].id - 1) + '">' +
                '<i class="bi bi-play-circle"></i>' +
                '</button>' +
                '</div>' +
                '<div class="col-1">' +
                '<button type="button" class="add_song_to_playlist btn text-white">' +
                '<i class="bi bi-plus-square"></i>' +
                '</button>' +
                '</div>' +
                '</div>';
            $(id).append(songHtml);
        }
    }

    //load song len tab your playlist
    function loadListSongPlayList(arr, id) {
        $(id).empty();
        arr.forEach(function (song, index) {
            var songHtml = '<div class="song row col-12 m-3 ms-0 bg-secondary align-items-center p-1 background-linear-song">' +
                '<div class="index-list col-2 h3">' + (index + 1) + '</div>' +
                '<div class="col-7 d-flex">' +
                '<img src="' + song.img + '" alt="" style="width: 50px;" class="border-img">' +
                '<div class="ms-2">' +
                '<h5>' + song.tenNhac + '</h5>' +
                '<small class="text-white">' + song.casi + '</small>' +
                '</div>' +
                '</div>' +
                '<div class="col-1">' + song.thoiluong + '</div>' +
                '<div class="col-1">' +
                '<button type="button" class="play_song btn text-white" data-song-index="' + (arr[index].id - 1) + '">' +
                '<i class="bi bi-play-circle"></i>' +
                '</button>' +
                '</div>' +
                '<div class="col-1">' +
                '<button type="button" class="remove_song_from_playlist btn text-white" data-songname="' + song.tenNhac + '">' +
                '<i class="bi bi-dash-square"></i>' +
                '</button>' +
                '</div>' +
                '</div>';
            $(id).append(songHtml);
        });
    }


    // danh sach bai nhac
    var listFeatured = [
        { id: 1, img: "../Image/Music/ca-si-1.jpg", tenNhac: "Nấu ăn cho em", casi: "Đen Vâu", thoiluong: "4:17", src: "../Song/NauAnChoEm.mp3" },
        { id: 2, img: "../Image/Music/ca-si-2.jpg", tenNhac: "Anh nhà ở đâu thế", casi: "Amee", thoiluong: "4:15", src: "../Song/AnhNhaODauThe.mp3" },
        { id: 3, img: "../Image/Music/ca-si-3.jpg", tenNhac: "Chúng ta của hiện tại", casi: "Sơn Tùng", thoiluong: "4:37", src: "../Song/ChungTaCuaHienTai.mp3" },
        { id: 4, img: "../Image/Music/ca-si-4.jpg", tenNhac: "Anh luôn như vậy", casi: "B-Ray", thoiluong: "3:35", src: "../Song/AnhLuonNhuVay.mp3" },
        { id: 5, img: "../Image/Music/ca-si-5.jpg", tenNhac: "Em gái mưa", casi: "Hương Tràm", thoiluong: "4:45", src: "../Song/EmGaiMua.mp3" },
        { id: 6, img: "../Image/Music/ca-si-6.jpg", tenNhac: "Có chắc yêu là đây", casi: "Sơn Tùng M-TP", thoiluong: "3:50", src: "../Song/CoChacYeuLaDay.mp3" },
        { id: 7, img: "../Image/Music/ca-si-7.jpg", tenNhac: "Yêu 5", casi: "Rhymastic", thoiluong: "4:03", src: "../Song/Yeu5.mp3" },
        { id: 8, img: "../Image/Music/ca-si-8.jpg", tenNhac: "Bạc phận", casi: "Jack", thoiluong: "3:55", src: "../Song/BacPhan.mp3"  },
        { id: 9, img: "../Image/Music/ca-si-9.jpg", tenNhac: "Người âm phủ", casi: "Karik", thoiluong: "4:20", src: "../Song/NguoiAmPhu.mp3"   },
        { id: 10, img: "../Image/Music/ca-si-10.jpg", tenNhac: "Đi để trở về", casi: "Soobin Hoàng Sơn", thoiluong: "4:22", src: "../Song/DiDeTroVe.mp3" }
    ];
    var listTrending = [
        { id: 1, img: "../Image/Music/ca-si-1.jpg", tenNhac: "Nấu ăn cho em", casi: "Đen Vâu", thoiluong: "4:17", src: "../Song/NauAnChoEm.mp3" },
        { id: 2, img: "../Image/Music/ca-si-2.jpg", tenNhac: "Anh nhà ở đâu đấy", casi: "Amee", thoiluong: "4:15", src: "../Song/AnhNhaODauDay.mp3" }
    ];
    var listRelease = [
        { id: 3, img: "../Image/Music/ca-si-3.jpg", tenNhac: "Chúng ta của hiện tại", casi: "Sơn Tùng", thoiluong: "4:37", src: "../Song/ChungTaCuaHienTai.mp3" },
        { id: 4, img: "../Image/Music/ca-si-4.jpg", tenNhac: "Anh luôn như vậy", casi: "B-Ray", thoiluong: "3:35", src: "../Song/AnhLuonNhuVay.mp3" }
    ];

    var record = [
        {id: 1, url: "../Song/Lyrics/NauAnChoEm.txt" ,stamp: ["0:25","0:28","0:31","0:33","0:36","0:39","0:43","0:47","0:50","0:52","0:55","0:58","0:59","1:02","1:04","1:07","1:10","1:12","1:15","1:18","1:20","1:24","1:29","1:32","1:35","1:37","1:40","1:43","1:47","1:51","1:53","1:56","1:59","2:02","2:05","2:07","2:10","2:12","2:15","2:18","2:20","2:23","2:26","2:29","2:33","2:38","2:44","2:49","2:56","2:59","3:01","3:04","3:06","3:09","3:13","3:19","3:25","3:30","3:33","3:36","3:39","3:42","3:46","3:50","3:53","3:57"]},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5}
    ]


    // thuc hien load nhac len va load su kien
    loadListSong(listFeatured, "#featured-song");
    loadListSong(listTrending, "#trending-song");
    loadListSong(listRelease, "#release-song");

    // load caregory
    function loadCategory(id, arr) {
        var i;
        for (i = 0; i < arr.length; i++) {
            $(id).append(
                '<div class="col-lg-2 col-sm-6 mb-2">'
                + '<a href="">'
                + '<img class="card-img background-linear-song" src="' + arr[i].img + '"alt="">'
                + '</a>'
                + '<h3>' + arr[i].name + '</h3>'
                + '</div>');
        }
    }

    // danh sach cac loai nhac

    var listCategory_1 = [
        { id: 1, img: "../Image/Music/ca-si-1.jpg", name: "Love" },
        { id: 2, img: "../Image/Music/ca-si-2.jpg", name: "Pop" },
        { id: 3, img: "../Image/Music/ca-si-3.jpg", name: "Rock" },
        { id: 4, img: "../Image/Music/ca-si-4.jpg", name: "Hip-hop/Rap" },
        { id: 5, img: "../Image/Music/ca-si-5.jpg", name: "Electronic/Dance" },
        { id: 6, img: "../Image/Music/ca-si-6.jpg", name: "Country" },
    ];
    var listCategory_2 = [
        { id: 7, img: "../Image/Music/ca-si-7.jpg", name: "Jazz" },
        { id: 8, img: "../Image/Music/ca-si-8.jpg", name: "Lofi" }
    ];

    // thuc hien load category
    loadCategory("#category_row_1", listCategory_1);
    loadCategory("#category_row_2", listCategory_2);

    var audio = $("#mySong").get(0); 

    //Biến cục bộ index_list dùng để lấy vị trí bài hát trên list nhạc ở mục "Featured".
    var index_list = 0;
    
    $(document).on("click", ".play_song", function () {
        var songIndex = $(this).data("song-index");
        var song = listFeatured[songIndex];
        var audioElement = $("#mySong")[0];
    
        $(".play_song").html('<i class="bi bi-play-circle"></i>'); // Reset tất cả nút thành trạng thái chơi
        $(this).html('<i class="bi bi-pause-circle"></i>'); // Thay đổi nút này thành trạng thái tạm dừng
    
        // Cập nhật nguồn audio và phát nhạc
        audioElement.src = song.src;
        audioElement.play();
    
        // Cập nhật thông tin hiển thị bài hát đang phát
        updateNowPlaying(songIndex, song.img);
    
        $("#playButton").addClass("visually-hidden");
        $("#pauseButton").removeClass("visually-hidden");
        $("#mayNgheNhac").removeClass("visually-hidden"); 
        $("#footer-void").removeClass("visually-hidden");
    
        index_list = songIndex;
    });



    function updateNowPlaying(songIndex, img) {
        // Lấy thông tin bài hát từ listFeatured dựa trên chỉ số
        var song = listFeatured[songIndex];
    
        // Cập nhật phần tử HTML với tên bài hát và ca sĩ
        $("#songTitle").text(song.tenNhac);
        $("#author").text(song.casi);
        $("#author-img").attr('src', img);
        $("#author-img").attr('alt', song.casi);
    }

    function changeSong(songIndex) {
        if (songIndex < 0 || songIndex >= listFeatured.length) {
            return;
        }
        
        audio.src = listFeatured[songIndex].src;
        audio.index = songIndex;
        updateNowPlaying(songIndex, listFeatured[songIndex].img);
    
        audio.play();
        updateButtonStates(songIndex);  
    }

    function updateButtonStates(songIndex) {
        $(".play_song").html('<i class="bi bi-play-circle"></i>'); 
        $(".index-list").eq(songIndex).closest('.song').find(".play_song").html('<i class="bi bi-pause-circle"></i>'); // Nút bài hát hiện tại thành pause
    }

    // Xử lý khi nhấn nút play
    $("#playButton").click(function () {
        audio.play();             
        $(this).addClass("visually-hidden");
        $("#pauseButton").removeClass("visually-hidden");
        updateButtonStates(index_list);
    });

    $("#pauseButton").click(function () {
        audio.pause();
        $(this).addClass("visually-hidden");
        $("#playButton").removeClass("visually-hidden");
        updateButtonStates(index_list);
    });
    
    $("#prev-btn").click(function() {
        if (--index_list < 0) {
            handleEndOfList();
            return;
        }

        changeSong(index_list);
    });
    
    $("#next-btn").click(function() {
        if (++index_list == listFeatured.length) {
            handleEndOfList();
            return;
        }

        changeSong(index_list);
    });

    function handleEndOfList() {
        hideMusicPlayer();
        index_lis = 0;
        audio.pause();
        $("#playButton").removeClass("visually-hidden");
        $("#pauseButton").addClass("visually-hidden");
        $(".play_song").html('<i class="bi bi-play-circle"></i>');
    }


    var mode = "no";
    var lyrics_mode = "unshow"
    var shuffle_mode = "unshuffle"

    $(audio).on("timeupdate", function() {
        var percentage = (audio.currentTime / audio.duration) * 100;
        $("#myProgressBar").css("width", percentage + "%");
        $("#currentTime").text(formatTime(audio.currentTime));
        $("#endTime").text(formatTime(audio.duration));
    
        if (audio.currentTime == audio.duration) {
            handleEndOfSong();
        }
    });
    
    function handleEndOfSong() {
        if (mode === "one") {
            audio.play();  // Play the same song again
            clearLyrics();
            importLyrics(index_list);  // Assuming importLyrics can take index to load lyrics
        } else if (mode === "yes" && index_list === (listFeatured.length - 1)) {
            playSongAtIndex(0);  // Start from the beginning of the playlist
        } else {
            playNextSong();
        }
    }
    
    function playSongAtIndex(index) {
        if (index_list !== undefined && index_list !== index) {
            var song = listFeatured[index];
            audio.src = song.src;
            audio.index = index;
            index_list = index;
    
            updateNowPlaying(index, song.img);
            audio.play();
    
            updateButtonStates(index);
            showPlayerControls();
        }
    }
    
    function playNextSong() {
        var nextIndex = index_list + 1;
        if (nextIndex < listFeatured.length) {
            playSongAtIndex(nextIndex);
        } else {
            $(".play_song").html('<i class="bi bi-play-circle"></i>');
            hideMusicPlayer(); 
        }
    }
    
    function showPlayerControls() {
        $("#playButton").addClass("visually-hidden");
        $("#pauseButton").removeClass("visually-hidden");
        $("#mayNgheNhac").removeClass("visually-hidden");
        $("#footer-void").removeClass("visually-hidden");
    }
    
    function hideMusicPlayer() {
        $("#mayNgheNhac").addClass("visually-hidden");
        $("#footer-void").addClass("visually-hidden");
        $("#pauseButton").addClass("visually-hidden");
        $("#playButton").removeClass("visually-hidden");
    }
    
    function importLyrics(){
        var index = 0;
        $.ajax({
            url: "../Song/Lyrics/NauAnChoEm.txt",
            dataType: "text",
            success: function(data){
                var lines = data.split("\n")
                lines.forEach(function(line){
                    var source = '<p id="'+index+'" class="text-light text-start mt-3 fw-bold" '+
                    'style="font-size: x-large;">'+line+'</p>';
                    $("#lyrics").append(source)
                    index++;
                })
            }
        })
    }

    $("#lyrics-btn").on('click', function() {
        lyrics_mode = $(this).attr("mode") === "show" ? "unshow" : "show";
        $(this).attr("mode", lyrics_mode);
    
        if (lyrics_mode === "show") {
            $("#lyrics").removeClass("visually-hidden");
            $("#lyrics-button").attr("src", "../Image/Music/lyrics-active.png");
            importLyrics(); 
        } else {
            $("#lyrics").addClass("visually-hidden");
            $("#lyrics-button").attr("src", "../Image/Music/lyrics.png");
        }
    });

    $("#shuffle-btn").on('click', function() {
        shuffle_mode = $(this).attr("mode") === "shuffle" ? "unshuffle" : "shuffle";
        $(this).attr("mode", shuffle_mode);
    
        var iconSrc = shuffle_mode === "shuffle" ? "../Image/Music/shuffle-active.png" : "../Image/Music/shuffle.png";
        $("#shuffle-button").attr("src", iconSrc);
    });

    function clearLyrics(){
        $("#lyrics").empty();
    }
    // "text-light text-start mt-3 fw-bold"


    $(audio).on("timeupdate" , function (){
        currentTime = formatTime(audio.currentTime);
        for(i = 0; i < record[0].stamp.length; i++){
            if(currentTime == record[0].stamp[i]){
                for(j = 0; j <= i; j++){
                    var id = '#'+j
                    $(id).removeClass("text-light")
                    $(id).addClass("text-warning")

                    var scrollableDiv = $("#lyrics");
                    var elementToScroll = $(id);
                    // Calculate the middle of the scrollable div
                    var middleOfDiv = scrollableDiv.height() / 2;

                    // Calculate the position of the element relative to the scrollable div
                    var elementOffset = elementToScroll.offset().top - scrollableDiv.offset().top;

                    // Calculate the scroll position to center the element
                    var scrollPosition = scrollableDiv.scrollTop() + elementOffset - middleOfDiv + (elementToScroll.height() / 2);

                    // Scroll the scrollable div to the middle of the element
                    scrollableDiv.scrollTop(scrollPosition);
                }
                for(k = i+1; k < record[0].stamp.length; k++){
                    var id = '#'+k
                    $(id).addClass("text-light")
                    $(id).removeClass("text-warning")
                }
                break;
            }
        }
    })

    $("#repeat").on("click", function(){
        mode = $(this).attr("mode")

        if(mode == "no"){
            $(this).attr("mode", "yes")
            mode = "yes";
            $("#repeat-button").attr("src", "../Image/Music/repeat-active.png")
        }else if(mode == "yes"){
            $(this).attr("mode", "one")
            mode = "one";
            $("#repeat-button").attr("src", "../Image/Music/repeat-one.png")
        }else if(mode == "one"){
            $(this).attr("mode", "no");
            mode = "no";
            $("#repeat-button").attr("src", "../Image/Music/repeat.png")
        }
    })

    // Điều chỉnh âm lượng
    $("#volumeSlider").on("input", function () {
        audio.volume = $(this).val();
    });

    // Hàm định dạng thời gian từ giây sang mm:ss
    function formatTime(seconds) {
        var min = Math.floor(seconds / 60);
        var sec = Math.floor(seconds % 60);
        if(isNaN(min) || isNaN(sec)){
            min = 0;
            sec = 0;
        }
        return min + ':' + (sec < 10 ? '0' + sec : sec);
    }

    $("#progressBar").on("click", function (e) {
        var progressBar = $(this);
        var offset = progressBar.offset();
        var x = e.pageX - offset.left;
        var totalWidth = progressBar.width();
        var percentage = x / totalWidth;
        var audioTime = percentage * audio.duration;

        if (!isNaN(audioTime)) { 
            audio.currentTime = audioTime;
        }
    });
});