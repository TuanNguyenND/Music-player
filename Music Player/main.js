const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
    songs: [
        {
            name: 'nhu-nhung-phut-ban-dau',
            singer: 'Hoai-Lam',
            path: './assets/music/PhutBanDau-HoaiLam-3289002.mp3',
            image: './assets/img/HL-NNPBD.jpeg'
        },
        {
            name: 'hoa-no-khong-mau',
            singer: 'Hoai-Lam',
            path: './assets/music/HoaNoKhongMauAcousticVersion-HoaiLam-6317057.mp3',
            image: './assets/img/HL-HNKM.jpeg'
        },
        {
            name: 'aloha',
            singer: 'cool',
            path: './assets/music/Aloha-Cool.mp3',
            image: './assets/img/aloha.jpeg'
        },
        {
            name: 'My-Love',
            singer: 'Westlife',
            path: './assets/music/Westlife-My-Love.mp3',
            image: './assets/img/mylove.jpeg'
        },
        {
            name: 'Endless-Love',
            singer: 'Jacky-Chan',
            path: './assets/music/Endless-Love-Jacky-Chan.mp3',
            image: './assets/img/thanthoai.jpeg'
        },
        {
            name: 'nhin-ve-phia-em',
            singer: 'Phan-Duy-Anh',
            path: './assets/music/NhinVePhiaEm-PhanDuyAnhACV-8093994.mp3',
            image: './assets/img/nhinvephiaem.jpeg'
        },
        {
            name: 'em-oi-dung-khoc-remix',
            singer: 'NaN',
            path: './assets/music/EmOiDungKhocRemix.mp3',
            image: './assets/img/emdoidungkhoc.jpeg'
        },
        {
            name: 'roi-bo',
            singer: 'voi-ban-don',
            path: './assets/music/roi-bo-voi-ban-don-mp3.mp3',
            image: './assets/img/voibandon.jpeg'
        }
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
                        <div class="song">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        })
        $('.playlist').innerHTML = htmls.join('');
    },

    start: function () {
        this.render()
    }
}

app.start()

