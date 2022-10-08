import React from "react";
import { Tabs, Container } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";
import {
  faBookmark,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
const New = () => {
  return (
    <div id="New">
      <div className="new">
        <ScrollAnimation animateIn="bounceInDown">
          <Container size="lg" px="xs">
            <Tabs defaultValue="first">
              <Tabs.List grow>
                <Tabs.Tab value="first" className="tabNew" color="teal">
                  Điện Ảnh 24h
                </Tabs.Tab>
                <Tabs.Tab value="second" className="tabNew" color="blue">
                  Review
                </Tabs.Tab>
                <Tabs.Tab value="three" className="tabNew" color="red">
                  Khuyến Mãi
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="first" pt="xs">
                <div className="card-content row">
                  <div className="example-1 card w-50">
                    <div className="wrapper">
                      <div className="datepost">
                        <span className="daypost">01</span>
                        <span className="monthpost">Tháng 7</span>
                        <span className="yearpost">2020</span>
                      </div>
                      <div className="datanews">
                        <div className="contentnews">
                          <span className="authornews">Anh Phong</span>
                          <h1 className="titlenews">
                            <a className="title__link" href="/#">
                              Một thành viên của Avengers sẽ "biến chất"?
                            </a>
                          </h1>
                          <p className="text-description">
                            Marvel Studios đang ủ ý tưởng cho quân mình đánh
                            quân ta, khi dự định biến một thành viên cao cấp của
                            nhóm Avengers trở thành phản diện...
                          </p>
                          <label htmlFor="show-menu" className="menu-button">
                            <span>...</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="example-2 card w-50">
                    <div className="wrapper">
                      <div className="header-post">
                        <div className="datepost">
                          <span className="daypost">26 </span>
                          <span className="monthpost">Tháng 6 </span>
                          <span className="yearpost">2020</span>
                        </div>
                        <ul className="menu-content">
                          <li className="menu-content-item">
                            <a href="/#" className="item__link">
                              <FontAwesomeIcon
                                className="iconUser"
                                icon={faBookmark}
                                color="#9e9e9e"
                              />
                            </a>
                          </li>
                          <li className="menu-content-item">
                            <a href="/#" className="item__link fa fa-heart">
                              <FontAwesomeIcon
                                className="iconUser"
                                icon={faHeart}
                                color="#9e9e9e"
                              />
                            </a>
                          </li>
                          <li className="menu-content-item">
                            <a href="/#" className="item__link fa fa-comment">
                              <FontAwesomeIcon
                                className="iconUser"
                                icon={faComment}
                                color="#9e9e9e"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="datanews">
                        <div className="contentnews">
                          <span className="authornews">Kevin De Bruyne</span>
                          <h1 className="titlenews">
                            <a className="title__link" href="/#">
                              Stranger Things: The sound of the Upside Down
                            </a>
                          </h1>
                          <p className="text-description">
                            The antsy bingers of Netflix will eagerly anticipate
                            the digital release of the Survive soundtrack, out
                            today.
                          </p>
                          <label htmlFor="show-menu" className="menu-button">
                            <span>...</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="second" pt="xs" className="content2">
                <div className="row__above row">
                  <div className="row__item col-md-6 col-sm-12">
                    <div className="item__img">
                      <a href="/#">
                        <img
                          className="img-fluid"
                          src="https://s3img.vcdn.vn/123phim/2020/04/stormbreaker-va-mjolnir-loai-vu-khi-nao-cua-thor-manh-hon-15876330404511.png"
                          alt="hinhanhstorm"
                        />
                      </a>
                    </div>
                    <div className="item__text">
                      <a className="item__title" href="/#">
                        [Review] Stormbreaker và Mjolnir: Loại vũ khí nào của
                        Thor mạnh hơn?
                      </a>
                      <p className="item__description">
                        Tác phẩm mới nhất của Marvel tiếp tục là câu chuyện hài
                        hước và cảm xúc về tình cảm gia đình.
                      </p>
                    </div>
                  </div>
                  <div className="row__item col-md-6 col-sm-12">
                    <div className="item__img">
                      <a href="/#">
                        <img
                          className="img-fluid"
                          src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925415754.jpg"
                          alt="hinhansds"
                        />
                      </a>
                    </div>
                    <div className="item__text">
                      <a className="item__title" href="/#">
                        [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                        bệnh hoạn vô hình?
                      </a>
                      <p className="item__description">
                        Phiên bản hiện đại của The Invisible Man là một trong
                        những phim kinh dị xuất sắc nhất năm nay.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row__below row">
                  <div className="row__left col-md-8">
                    <div className="left__below row">
                      <div className="left__item col-6">
                        <div className="item__img">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                            alt="hinhansdsddh"
                          />
                        </div>
                        <div className="item__text">
                          <a className="item__title" href="/#">
                            [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây
                            chứ đâu xa
                          </a>
                          <p className="item__description">
                            Brahms: The Boy II có những màn hù dọa ấn tượng
                            nhưng cái kết lại không tương xứng với phần mở đầu
                            hứa hẹn.
                          </p>
                        </div>
                      </div>
                      <div className="left__item col-6">
                        <div className="item__img">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907845631.jpg"
                            alt="hinhaa212anh"
                          />
                        </div>
                        <div className="item__text">
                          <a className="item__title" href="/#">
                            [Review] Nhím Sonic - Cười thả ga cùng chàng nhím
                            siêu thanh lầy lội
                          </a>
                          <p className="item__description">
                            Nhờ tiếp thu ý kiến của fan mà Nhím Sonic đã trở
                            thành một trong những bộ phim chuyển thể từ trò chơi
                            điện tử xuất sắc nhất.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__right col-md-4 col-sm-12">
                    <ul>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ
                            chưa bao giờ là việc dễ dàng
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2020/02/review-bi-mat-cua-gio-cau-chuyen-tinh-nguoi-duyen-ma-day-nuoc-mat-15806427358700.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời
                            mình qua phim ảnh
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2020/01/gai-gia-lam-chieu-3-cuoc-chien-me-chong-nang-dau-cua-gioi-sieu-giau-xu-hue-15798623446424.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [Review] Birds of Prey - Màn lột xác hoành tráng của
                            Harley Quinn và DC
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2020/01/30-chua-phai-tet-phim-vong-lap-thoi-gian-thuong-hieu-viet-15797534706701.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [Review] Bí Mật Của Gió - Câu chuyện “tình người
                            duyên ma” đầy nước mắt
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="three" pt="xs" className="content3">
                <div className="row__above row">
                  <div className="row__item col-md-6 col-sm-12">
                    <div className="item__img">
                      <a href="/#">
                        <img
                          className="img-fluid"
                          src="https://s3img.vcdn.vn/123phim/2017/06/bhd-star-gia-ve-45k-tai-bhd-star-quang-trung-14974982146099.jpg"
                          alt="hinhanhstorm"
                        />
                      </a>
                    </div>
                    <div className="item__text">
                      <a className="item__title" href="/#">
                        CGV & BHD Star – Mua 2 vé tính tiền 1 khi thanh toán qua
                        ZaloPay
                      </a>
                      <p className="item__description">
                        Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV
                        HOẶC BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật.
                      </p>
                    </div>
                  </div>
                  <div className="row__item col-md-6 col-sm-12">
                    <div className="item__img">
                      <a href="/#">
                        <img
                          className="img-fluid"
                          src="https://s3img.vcdn.vn/123phim/2017/09/bhd-star-goi-phim-trang-yeu-thuong-15065869628551.jpg"
                          alt="hinhansds"
                        />
                      </a>
                    </div>
                    <div className="item__text">
                      <a className="item__title" href="/#">
                        Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%
                      </a>
                      <p className="item__description">
                        Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng 20%
                        khi thanh toán qua ZaloPay.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row__below row">
                  <div className="row__left col-md-8">
                    <div className="left__below row">
                      <div className="left__item col-6">
                        <div className="item__img">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2017/05/bhd-uu-dai-grab-14943206847693.jpg"
                            alt="hinhansdsddh"
                          />
                        </div>
                        <div className="item__text">
                          <a className="item__title" href="/#">
                            Chào bạn mới - BHD Star Mua 2 Tính Tiền 1
                          </a>
                          <p className="item__description">
                            Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả tiền
                            1 vé khi thanh toán qua ZaloPay.
                          </p>
                        </div>
                      </div>
                      <div className="left__item col-6">
                        <div className="item__img">
                          <img
                            className="img-fluid"
                            src="https://s3img.vcdn.vn/123phim/2017/06/zalo-pay-phim-hot-gia-hoi-14975106730615.jpg"
                            alt="hinhaa212anh"
                          />
                        </div>
                        <div className="item__text">
                          <a className="item__title" href="/#">
                            Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1
                          </a>
                          <p className="item__description">
                            Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách
                            hàng mới khi thanh toán bằng ZaloPay.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row__right col-md-4 col-sm-12">
                    <ul>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2017/03/galaxy-hoa-than-sieu-nhan-nhan-nhieu-uu-dai-14906148212096.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            CGV – 79.000Đ/vé cuối tuần khi thanh toán bằng
                            ZaloPay!
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2017/06/123phim-ddc-mua-ve-online-nhan-qua-lien-tay-14969118909584.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt
                            11k/vé Anh Trai Yêu Quái
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2017/06/ddc-xem-phim-gia-re-truoc-10h-va-sau-22h-14968911599222.jpg"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt
                            vé Pháp Sư Mù: Ai Chết Giơ Tay
                          </div>
                        </a>
                      </li>
                      <li className="right__item">
                        <a className="item__link" href="/#">
                          <div className="item__img">
                            <img
                              src="https://s3img.vcdn.vn/123phim/2017/06/ff4a2d1afce265cae66b8872197f1e5e.png"
                              alt="ad223"
                            />
                          </div>
                          <div className="item__title">
                            [Mega GS] Một đoá hoa thay ngàn lời yêu
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>
          </Container>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default New;
