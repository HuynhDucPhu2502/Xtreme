$(document).ready(function () {
    var yourPlayList = [];

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
            $("#tab-yourPlaylist").empty();
            loadListSongPlayList(yourPlayList, "#tab-yourPlaylist");
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


    // loading nhac len cac tab ngoai tru tab your playlist
    function loadListSong(arr, id) {
        $(id).empty();  // Làm sạch nội dung hiện tại trước khi thêm mới
        for (var i = 0; i < arr.length; i++) {
            var songHtml =
                '<div class="song row col-lg-6 col-sm-12 m-3 ms-0 bg-secondary align-items-center p-1 background-linear-song">' +
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

    // load song len tab your playlist
    function loadListSongPlayList(arr, id) {
        $(id).empty();
        arr.forEach(function (song, index) {
            var songHtml = '<div class="song row col-lg-6 col-sm-12 m-3 ms-0 bg-secondary align-items-center p-1 background-linear-song">' +
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


    // thuc hien load nhac len va load su kien
    loadListSong(listFeatured, "#tab-featured");
    loadListSong(listTrending, "#tab-trending");
    loadListSong(listRelease, "#tab-release");

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
    var index_list;
    
    //Su kien load nhac len thanh dieu khien ben duoi cung
    $(document).on("click", ".play_song", function () {
        var songIndex = $(this).attr("data-song-index"); 
        index_list =  songIndex;
        var songSrc = listFeatured[songIndex].src;
        var img = listFeatured[songIndex].img;
        
        var audio_index = audio.index;
        if(audio_index == undefined){
            audio_index = 0;
        }
        var song = $(".index-list").eq(audio_index).closest('.song');
        song.find(".play_song").empty();
        song.find(".play_song").append('<i class="bi bi-play-circle"></i>');

        var audioElement = $("#mySong")[0];              
        audioElement.src = songSrc;
        audioElement.index = songIndex;
        updateNowPlaying(songIndex, img);

        $("#playButton").removeClass("visually-hidden");
        $("#pauseButton").addClass("visually-hidden");
        $("#mayNgheNhac").removeClass("visually-hidden");
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

    // Xử lý khi nhấn nút play
    $("#playButton").click(function () {
        if(index_list == undefined){
            index_list = 0;
        }
        audio.play();             
        $(this).addClass("visually-hidden");
        $("#pauseButton").removeClass("visually-hidden");
        var song = $(" .index-list").eq(index_list).closest('.song');
        song.find(".play_song").empty();
        song.find(".play_song").append('<i class="bi bi-pause-circle"></i>');
    });

    // Xử lý khi nhấn nút pause
    $("#pauseButton").click(function () {
        if(index_list == undefined){
            index_list = 0;
        }
        audio.pause();
        $(this).addClass("visually-hidden");
        $("#playButton").removeClass("visually-hidden");
        var song = $(" .index-list").eq(index_list).closest('.song');
        song.find(".play_song").empty();
        song.find(".play_song").append('<i class="bi bi-play-circle"></i>');
    });

    //Xử lí khi nhấn nút prev
    $("#prev-btn").on("click", function(){
        var audioElement = $("#mySong")[0];              
        var songIndex = audioElement.index;
        songIndex--;
        var song = $(" .index-list").eq(index_list).closest('.song');
        song.find(".play_song").empty();
        song.find(".play_song").append('<i class="bi bi-play-circle"></i>');
        index_list--;
        var songSrc = listFeatured[songIndex].src;  
        var img = listFeatured[songIndex].img;
        audioElement.src = songSrc;  
        audioElement.index = songIndex;

        updateNowPlaying(songIndex, img);

        $("#playButton").removeClass("visually-hidden");
        $("#pauseButton").addClass("visually-hidden");
    })

    //Xử lí khi nhấn nút next
    $("#next-btn").on("click", function(){
        var audioElement = $("#mySong")[0];              
        var songIndex = audioElement.index;
        if(songIndex == undefined){
            songIndex = 0;
        }
        songIndex++;
        var song = $(".index-list").eq(index_list).closest('.song');
        song.find(".play_song").empty();
        song.find(".play_song").append('<i class="bi bi-play-circle"></i>');
        index_list++;
        var songSrc = listFeatured[songIndex].src;  
        var img = listFeatured[songIndex].img;
        audioElement.src = songSrc;  
        audioElement.index = songIndex;

        updateNowPlaying(songIndex, img);

        $("#playButton").removeClass("visually-hidden");
        $("#pauseButton").addClass("visually-hidden");
    })

    // Cập nhật thời gian hiện tại và tiến trình khi audio đang phát
    $(audio).on("timeupdate", function () {
        var percentage = (audio.currentTime / audio.duration) * 100;
        $("#myProgressBar").css("width", percentage + "%");
        $("#currentTime").text(formatTime(audio.currentTime));
        $("#endTime").text(formatTime(audio.duration));

        if (audio.currentTime == audio.duration) {
            $("#mayNgheNhac").addClass("visually-hidden");
            var song = $(" .index-list").eq(index_list).closest('.song');
            song.find(".play_song").empty();
            song.find(".play_song").append('<i class="bi bi-play-circle"></i>');
        }
    });

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