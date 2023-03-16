import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  constructor(private http: HttpClient) {}
  public data=[
    { city: 'Chọn thành phố', district: ['Quận Huyện'] }, {
      city: 'An Giang',
      district:  [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district:[
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],},
    {
      city: 
      'Bắc Giang',
      district: [
        'Thành phố Bắc Giang',
        'Huyện Hiệp Hòa',
        'Huyện Lạng Giang',
        'Huyện Lục Nam',
        'Huyện Lục Ngạn',
        'Huyện Sơn Động',
        'Huyện Tân Yên',
        'Huyện Việt Yên',
        'Huyện Yên Dũng',
        'Huyện Yên Thế',
      ],},
    {
      city: 
      'Bắc Kạn',
      district:  [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],},
    {
      city: 
      'Bạc Liêu',
      district:  [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],},
    {
      city: 
      'Bắc Ninh',
      district:  [
        'Thành phố Bắc Ninh',
        'Thị xã Từ Sơn',
        'Huyện Gia Bình',
        'Huyện Lương Tài',
        'Huyện Quế Võ',
        'Huyện Thuận Thành',
        'Huyện Tiên Du',
        'Huyện Yên Phong',
      ],},
    {
      city: 
      'Bến Tre',
      district:  [
        'Thành phố Bến Tre',
        'Huyện Ba Tri',
        'Huyện Bình Đại',
        'Huyện Châu Thành',
        'Huyện Chợ Lách',
        'Huyện Giồng Trôm',
        'Huyện Mỏ Cày Bắc',
        'Huyện Mỏ Cày Nam',
        'Huyện Thạnh Phú',
      ],},
    {
      city: 
      'Bình Định',
      district:  [
        'Thành phố Quy Nhơn',
        'Huyện An Lão',
        'Huyện An Nhơn',
        'Huyện Hoài Ân',
        'Huyện Hoài Nhơn',
        'Huyện Phù Cát',
        'Huyện Phù Mỹ',
        'Huyện Tây Sơn',
        'Huyện Tuy Phước',
        'Huyện Vân Canh',
        'Huyện Vĩnh Thạnh',
      ],},
    {
      city: 
      'Bình Dương',
      district:  [
        'Thành phố Thủ Dầu Một',
        'Thị xã Bến Cát',
        'Thị xã Tân Uyên',
        'Huyện Bắc Tân Uyên',
        'Huyện Dầu Tiếng',
        'Huyện Dĩ An',
        'Huyện Phú Giáo',
        'Huyện Tân Uyên',
        'Huyện Thuận An',
      ],},
    {
      city: 
      'Bình Phước',
      district:  [
        'Thị xã Bình Long',
        'Thị xã Đồng Xoài',
        'Thị xã Phước Long',
        'Huyện Bù Đăng',
        'Huyện Bù Đốp',
        'Huyện Bù Gia Mập',
        'Huyện Chơn Thành',
        'Huyện Đồng Phú',
        'Huyện Hớn Quản',
        'Huyện Lộc Ninh',
        'Huyện Phú Riềng',
      ],},
    {
      city: 
      'Bình Thuận',
      district:  [
        'Bắc Bình',
        'Đảo Phú Quý',
        'Đức Linh',
        'Hàm Tân',
        'Hàm Thuận Bắc',
        'Hàm Thuận Nam',
        'La Gi',
        'Phan Thiết',
        'Phú Quý',
        'Tánh Linh',
        'Tuy Phong',
        'Trùng Khánh',
      ],},
    {
      city: 
      'Cà Mau',
      district:  [
        'Cái Nước',
        'Đầm Dơi',
        'Năm Căn',
        'Ngọc Hiển',
        'Phú Tân',
        'Thới Bình',
        'Trần Văn Thời',
        'U Minh',
      ],},
    {
      city: 
      'Cần Thơ',
      district:  [
        'Bình Thủy',
        'Cái Răng',
        'Cờ Đỏ',
        'Ninh Kiều',
        'Ô Môn',
        'Thốt Nốt',
        'Vĩnh Thạnh',
      ],},
    {
      city: 
      'Cao Bằng',
      district:  [
        'Bảo Lâm',
        'Bảo Lạc',
        'Hà Quảng',
        'Hòa An',
        'Nguyên Bình',
        'Phục Hòa',
        'Quảng Uyên',
        'Thạch An',
        'Thông Nông',
      ],},
    {
      city: 
      'Đà Nẵng',
      district:  [
        'Cẩm Lệ',
        'Hải Châu',
        'Hoà Vang',
        'Liên Chiểu',
        'Ngũ Hành Sơn',
        'Sơn Trà',
        'Thanh Khê',
      ],},
    {
      city: 
      'Đắk Lắk',
      district:  [
        'Thành phố Buôn Ma Thuột',
        'Thị xã Buôn Hồ',
        'Huyện Buôn Đôn',
        'Huyện Cư Kuin',
        "Huyện Cư M'gar",
        "Huyện Ea H'Leo",
        'Huyện Ea Kar',
        'Huyện Ea Súp',
        'Huyện Krông Ana',
        'Huyện Krông Bông',
        'Huyện Krông Buk',
        'Huyện Krông Năng',
        'Huyện Krông Pắc',
        'Huyện Lăk',
        "Huyện M'Đrăk",
      ],},
    {
      city: 
      'Đắk Nông',
      district:  [
        'Cư Jút',
        'Đắk GLong',
        'Đắk Mil',
        "Đắk R'Lấp",
        'Đắk Song',
        'Krông Nô',
        'Tuy Đức',
      ],},
    {
      city: 
      'Điện Biên',
      district:  [
        'Điện Biên',
        'Điện Biên Đông',
        'Điện Biên Phủ',
        'Mường Ảng',
        'Mường Chà',
        'Mường Lay',
        'Mường Nhé',
        'Nậm Pồ',
        'Tủa Chùa',
        'Tuần Giáo',
      ],},
    {
      city: 
      'Đồng Nai',
      district:  [
        'Biên Hòa',
        'Cẩm Mỹ',
        'Định Quán',
        'Long Khánh',
        'Nhơn Trạch',
        'Tân Phú',
        'Thống Nhất',
        'Trảng Bom',
        'Vĩnh Cửu',
        'Xuân Lộc',
      ],
},
    {
      city: 
      'Đồng Tháp',
      district:  [
        'Cao Lãnh',
        'Châu Thành',
        'Hồng Ngự',
        'Lai Vung',
        'Lấp Vò',
        'Tam Nông',
        'Tân Hồng',
        'Thanh Bình',
        'Tháp Mười',
        'Cao Lãnh',
        'Lấp Vò',
        'Sa Đéc',
        'Tân Hồng',
        'Tháp Mười',
      ],
},
    {
      city: 
      'Gia Lai',
      district:  [
        'Ayun Pa',
        'Chư Păh',
        'Chư Prông',
        'Chư Sê',
        'Đăk Đoa',
        'Đăk Pơ',
        'Đức Cơ',
        'Ia Grai',
        'Ia Pa',
        'KBang',
        'Kông Chro',
        'Krông Pa',
        'Mang Yang',
        'Phú Thiện',
        'Plei Ku',
      ],
},
    {
      city: 
      'Hà Giang',
      district:  [
        'Bắc Mê',
        'Bắc Quang',
        'Đồng Văn',
        'Hoàng Su Phì',
        'Mèo Vạc',
        'Quản Bạ',
        'Quang Bình',
        'Vị Xuyên',
        'Xín Mần',
        'Yên Minh',
      ],
},
    {
      city: 
      'Hà Nam',
      district:  ['Bình Lục', 'Duy Tiên', 'Kim Bảng', 'Lý Nhân', 'Thanh Liêm'],
},
    {
      city: 
      'Hà Nội',
      district:  [
        'Ba Đình',
        'Ba Vì',
        'Bắc Từ Liêm',
        'Cầu Giấy',
        'Chương Mỹ',
        'Đan Phượng',
        'Đông Anh',
        'Đống Đa',
        'Gia Lâm',
        'Hà Đông',
        'Hai Bà Trưng',
        'Hoài Đức',
        'Hoàn Kiếm',
        'Hoàng Mai',
        'Long Biên',
        'Mê Linh',
        'Mỹ Đức',
        'Nam Từ Liêm',
        'Phú Xuyên',
        'Phúc Thọ',
        'Quốc Oai',
        'Sóc Sơn',
        'Sơn Tây',
        'Tây Hồ',
        'Thạch Thất',
        'Thanh Oai',
        'Thanh Trì',
        'Thanh Xuân',
        'Thường Tín',
        'Từ Liêm',
      ],
},
    {
      city: 
      'Hải Dương',
      district:  [
        'Bình Giang',
        'Cẩm Giàng',
        'Gia Lộc',
        'Kim Thành',
        'Kinh Môn',
        'Nam Sách',
        'Ninh Giang',
        'Thanh Hà',
        'Thanh Miện',
        'Tứ Kỳ',
        'Hải Dương',
      ],
},
    {
      city: 
      'Hải Phòng',
      district:  [
        'An Dương',
        'An Lão',
        'Bạch Long Vĩ',
        'Cát Hải',
        'Đồ Sơn',
        'Dương Kinh',
        'Hải An',
        'Hồng Bàng',
        'Kiến Thụy',
        'Lê Chân',
        'Ngô Quyền',
        'Thủy Nguyên',
        'Tiên Lãng',
        'Vĩnh Bảo',
      ],
},
    {
      city: 
      'Hậu Giang',
      district:  [
        'Châu Thành',
        'Châu Thành A',
        'Long Mỹ',
        'Phụng Hiệp',
        'Vị Thủy',
        'Vị Thanh',
        'Ngã Bảy',
      ],
},
    {
      city: 
      'Hòa Bình',
      district:  [
        'Cao Phong',
        'Đà Bắc',
        'Kim Bôi',
        'Kỳ Sơn',
        'Lạc Sơn',
        'Lạc Thủy',
        'Lương Sơn',
        'Mai Châu',
        'Tân Lạc',
        'Yên Thủy',
        'Hoà Bình',
      ],
},
    {
      city: 
      'Hưng Yên',
      district:  [
        'Ân Thi',
        'Khoái Châu',
        'Kim Động',
        'Mỹ Hào',
        'Phù Cừ',
        'Tiên Lữ',
        'Văn Giang',
        'Văn Lâm',
        'Yên Mỹ',
      ],
},
    {
      city: 
      'Hà Tĩnh',
      district:  [
        'Cẩm Xuyên',
        'Can Lộc',
        'Đức Thọ',
        'Hương Khê',
        'Hương Sơn',
        'Kỳ Anh',
        'Lộc Hà',
        'Nghi Xuân',
        'Thạch Hà',
        'Vũ Quang',
      ],
},
    {
      city: 
      'Thành phố Hồ Chí Minh',
      district:  [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Bình Tân',
        'Quận Bình Thạnh',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận Thủ Đức',
        'Huyện Bình Chánh',
        'Huyện Cần Giờ',
        'Huyện Củ Chi',
        'Huyện Hóc Môn',
        'Huyện Nhà Bè',
      ],
},
    {
      city: 
      'Khánh Hòa',
      district:  [
        'Thành phố Nha Trang',
        'Thị xã Cam Ranh',
        'Thị xã Ninh Hòa',
        'Huyện Cam Lâm',
        'Huyện Diên Khánh',
        'Huyện Khánh Sơn',
        'Huyện Khánh Vĩnh',
        'Huyện Trường Sa',
        'Huyện Vạn Ninh',
      ],
},
    {
      city: 
      'Kiên Giang',
      district:  [
        'Thành phố Rạch Giá',
        'Thị xã Hà Tiên',
        'Huyện An Biên',
        'Huyện An Minh',
        'Huyện Châu Thành',
        'Huyện Giang Thành',
        'Huyện Giồng Riềng',
        'Huyện Gò Quao',
        'Huyện Hòn Đất',
        'Huyện Kiên Hải',
        'Huyện Kiên Lương',
        'Huyện Phú Quốc',
        'Huyện Tân Hiệp',
        'Huyện U minh Thượng',
        'Huyện Vĩnh Thuận',
      ],
},
    {
      city: 
      'Kon Tum',
      district:  [
        'Thành phố KonTum',
        'Huyện Đăk Glei',
        'Huyện Đăk Hà',
        'Huyện Đăk Tô',
        'Huyện Kon Plông',
        'Huyện Kon Rẫy',
        'Huyện Ngọc Hồi',
        'Huyện Sa Thầy',
        'Huyện Tu Mơ Rông',
        "Huyện Ia H' Drai",
      ],
},
    {
      city: 
      'Lai Châu',
      district:  [
        'Thị xã Lai Châu',
        'Huyện Mường Tè',
        'Huyện Nậm Nhùn',
        'Huyện Phong Thổ',
        'Huyện Sìn Hồ',
        'Huyện Tam Đường',
        'Huyện Tân Uyên',
        'Huyện Than Uyên',
      ],
},
    {
      city: 
      'Lào Cai',
      district:  [
        'Thành phố Lào Cai',
        'Huyện Bắc Hà',
        'Huyện Bảo Thắng',
        'Huyện Bảo Yên',
        'Huyện Bát Xát',
        'Huyện Mường Khương',
        'Huyện Sa Pa',
        'Huyện Văn Bàn',
        'Huyện Xi Ma Cai',
      ],
},
    {
      city: 
      'Lạng Sơn',
      district:  [
        'Thành phố Lạng Sơn',
        'Huyện Bắc Sơn',
        'Huyện Bình Gia',
        'Huyện Cao Lộc',
        'Huyện Chi Lăng',
        'Huyện Đình Lập',
        'Huyện Hữu Lũng',
        'Huyện Lộc Bình',
        'Huyện Tràng Định',
        'Huyện Văn Lãng',
        'Huyện Văn Quan',
      ],
},
    {
      city: 
      'Lâm Đồng',
      district:  [
        'Thành phố Bảo Lộc',
        'Thành phố Đà Lạt',
        'Huyện Bảo Lâm',
        'Huyện Cát Tiên',
        'Huyện Đạ Huoai',
        'Huyện Đạ Tẻh',
        'Huyện Đam Rông',
        'Huyện Di Linh',
        'Huyện Đơn Dương',
        'Huyện Đức Trọng',
        'Huyện Lạc Dương',
        'Huyện Lâm Hà',
      ],
},
    {
      city: 
      'Long An',
      district:  [
        'Thành phố Tân An',
        'Thị xã Kiến Tường',
        'Huyện Bến Lức',
        'Huyện Cần Đước',
        'Huyện Cần Giuộc',
        'Huyện Châu Thành',
        'Huyện Đức Hòa',
        'Huyện Đức Huệ',
        'Huyện Mộc Hóa',
        'Huyện Tân Hưng',
        'Huyện Tân Thạnh',
        'Huyện Tân Trụ',
        'Huyện Thạnh Hóa',
        'Huyện Thủ Thừa',
        'Huyện Vĩnh Hưng',
      ],
},
    {
      city: 
      'Nam Định',
      district:  [
        'Thành phố Nam Định',
        'Huyện Giao Thủy',
        'Huyện Hải Hậu',
        'Huyện Mỹ Lộc',
        'Huyện Nam Trực',
        'Huyện Nghĩa Hưng',
        'Huyện Trực Ninh',
        'Huyện Vụ Bản',
        'Huyện Xuân Trường',
        'Huyện Ý Yên',
      ],
},
    {
      city: 
      'Nghệ An',
      district:  [
        'Thành phố Vinh',
        'Thị xã Cửa Lò',
        'Thị xã Hoàng Mai',
        'Thị xã Thái Hòa',
        'Huyện Anh Sơn',
        'Huyện Con Cuông',
        'Huyện Diễn Châu',
        'Huyện Đô Lương',
        'Huyện Hưng Nguyên',
        'Huyện Kỳ Sơn',
        'Huyện Nam Đàn',
        'Huyện Nghi Lộc',
        'Huyện Nghĩa Đàn',
        'Huyện Quế Phong',
        'Huyện Quỳ Châu',
        'Huyện Quỳ Hợp',
        'Huyện Quỳnh Lưu',
        'Huyện Tân Kỳ',
        'Huyện Thanh Chương',
        'Huyện Tương Dương',
        'Huyện Yên Thành',
      ],
},
    {
      city: 
      'Ninh Bình',
      district:  [
        'Thành phố Ninh Bình',
        'Thị xã Tam Điệp',
        'Huyện Gia Viễn',
        'Huyện Hoa Lư',
        'Huyện Kim Sơn',
        'Huyện Nho Quan',
        'Huyện Yên Khánh',
        'Huyện Yên Mô',
      ],
},
    {
      city: 
      'Ninh Thuận',
      district:  [
        'Thành phố Phan Rang - Tháp Chàm',
        'Huyện Bác Ái',
        'Huyện Ninh Hải',
        'Huyện Ninh Phước',
        'Huyện Ninh Sơn',
        'Huyện Thuận Bắc',
        'Huyện Thuận Nam',
      ],
},
    {
      city: 
      'Phú Thọ',
      district:  [
        'Thành phố Việt Trì',
        'Thị xã Phú Thọ',
        'Huyện Cẩm Khê',
        'Huyện Đoan Hùng',
        'Huyện Hạ Hòa',
        'Huyện Lâm Thao',
        'Huyện Phù Ninh',
        'Huyện Tam Nông',
        'Huyện Tân Sơn',
        'Huyện Thanh Ba',
        'Huyện Thanh Sơn',
        'Huyện Thanh Thủy',
        'Huyện Yên Lập',
      ],
},
    {
      city: 
      'Phú Yên',
      district:  [
        'Thành phố Tuy Hòa',
        'Thị xã Sông Cầu',
        'Huyện Đông Hòa',
        'Huyện Đồng Xuân',
        'Huyện Phú Hòa',
        'Huyện Sơn Hòa',
        'Huyện Sông Hinh',
        'Huyện Tây Hòa',
        'Huyện Tuy An',
      ],
},
    {
      city: 
      'Quảng Bình',
      district:  [
        'Thành phố Đồng Hới',
        'Thị xã Ba Đồn',
        'Huyện Bố Trạch',
        'Huyện Lệ Thủy',
        'Huyện Minh Hóa',
        'Huyện Quảng Ninh',
        'Huyện Quảng Trạch',
        'Huyện Tuyên Hóa',
      ],
},
    {
      city: 
      'Quảng Nam',
      district:  [
        'Thành phố Hội An',
        'Thành phố Tam Kỳ',
        'Huyện Bắc Trà My',
        'Huyện Đại Lộc',
        'Huyện Điện Bàn',
        'Huyện Đông Giang',
        'Huyện Duy Xuyên',
        'Huyện Hiệp Đức',
        'Huyện Nam Giang',
        'Huyện Nam Trà My',
        'Huyện Nông Sơn',
        'Huyện Núi Thành',
        'Huyện Phú Ninh',
        'Huyện Phước Sơn',
        'Huyện Quế Sơn',
        'Huyện Tây Giang',
        'Huyện Thăng Bình',
        'Huyện Tiên Phước',
      ],
},
    {
      city: 
      'Quảng Ngãi',
      district:  [
        'Thành phố Quảng Ngãi',
        'Huyện Ba Tơ',
        'Huyện Bình Sơn',
        'Huyện Đức Phổ',
        'Huyện Lý Sơn',
        'Huyện Minh Long',
        'Huyện Mộ Đức',
        'Huyện Nghĩa Hành',
        'Huyện Sơn Hà',
        'Huyện Sơn Tây',
        'Huyện Sơn Tịnh',
        'Huyện Tây Trà',
        'Huyện Trà Bồng',
        'Huyện Tư Nghĩa',
      ],
},
    {
      city: 
      'Quảng Ninh',
      district:  [
        'Thành phố Hạ Long',
        'Thành phố Móng Cái',
        'Thị xã Cẩm Phả',
        'Thị xã Uông Bí',
        'Huyện Ba Chẽ',
        'Huyện Bình Liêu',
        'Huyện Cô Tô',
        'Huyện Đầm Hà',
        'Huyện Đông Triều',
        'Huyện Hải Hà',
        'Huyện Hoành Bồ',
        'Huyện Quảng Yên',
        'Huyện Tiên Yên',
        'Huyện Vân Đồn',
      ],
},
    {
      city: 
      'Quảng Trị',
      district:  [
        'Thành phố Đông Hà',
        'Thị xã Quảng Trị',
        'Huyện Cam Lộ',
        'Huyện Cồn Cỏ',
        'Huyện Đăk Rông',
        'Huyện Đảo Cồn Cỏ',
        'Huyện Gio Linh',
        'Huyện Hải Lăng',
        'Huyện Hướng Hóa',
        'Huyện Triệu Phong',
        'Huyện Vĩnh Linh',
      ],
},
    {
      city: 
      'Sóc Trăng',
      district:  [
        'Thành phố Sóc Trăng',
        'Huyện Châu Thành',
        'Huyện Cù Lao Dung',
        'Huyện Kế Sách',
        'Huyện Long Phú',
        'Huyện Mỹ Tú',
        'Huyện Mỹ Xuyên',
        'Huyện Ngã Năm',
        'Huyện Thạnh Trị',
        'Huyện Trần Đề',
        'Huyện Vĩnh Châu',
      ],
},
    {
      city: 
      'Sơn La',
      district:  [
        'Thành phố Sơn La',
        'Huyện Bắc Yên',
        'Huyện Mai Sơn',
        'Huyện Mộc Châu',
        'Huyện Mường La',
        'Huyện Phù Yên',
        'Huyện Quỳnh Nhai',
        'Huyện Sông Mã',
        'Huyện Sốp Cộp',
        'Huyện Thuận Châu',
        'Huyện Vân Hồ',
        'Huyện Yên Châu',
      ],
},
    {
      city: 
      'Tây Ninh',
      district:  [
        'Thành phố Tây Ninh',
        'Huyện Bến Cầu',
        'Huyện Châu Thành',
        'Huyện Dương Minh Châu',
        'Huyện Gò Dầu',
        'Huyện Hòa Thành',
        'Huyện Tân Biên',
        'Huyện Tân Châu',
        'Huyện Trảng Bàng',
      ],
},
    {
      city: 
      'Thái Bình',
      district:  [
        'Thành phố Thái Bình',
        'Huyện Đông Hưng',
        'Huyện Hưng Hà',
        'Huyện Kiến Xương',
        'Huyện Quỳnh Phụ',
        'Huyện Thái Thuỵ',
        'Huyện Tiền Hải',
        'Huyện Vũ Thư',
      ],
},
    {
      city: 
      'Thái Nguyên',
      district:  [
        'Thành phố Thái Nguyên',
        'Thị xã Sông Công',
        'Huyện Đại Từ',
        'Huyện Định Hóa',
        'Huyện Đồng Hỷ',
        'Huyện Phổ Yên',
        'Huyện Phú Bình',
        'Huyện Phú Lương',
        'Huyện Võ Nhai',
      ],
},
    {
      city: 
      'Thanh Hóa',
      district:  [
        'Thành phố Thanh Hóa',
        'Thị xã Bỉm Sơn',
        'Thị xã Sầm Sơn',
        'Huyện Bá Thước',
        'Huyện Cẩm Thủy',
        'Huyện Đông Sơn',
        'Huyện Hà Trung',
        'Huyện Hậu Lộc',
        'Huyện Hoằng Hóa',
        'Huyện Lang Chánh',
        'Huyện Mường Lát',
        'Huyện Nga Sơn',
        'Huyện Ngọc Lặc',
        'Huyện Như Thanh',
        'Huyện Như Xuân',
        'Huyện Nông Cống',
        'Huyện Quan Hóa',
        'Huyện Quan Sơn',
        'Huyện Quảng Xương',
        'Huyện Thạch Thành',
        'Huyện Thiệu Hóa',
        'Huyện Thọ Xuân',
        'Huyện Thường Xuân',
        'Huyện Tĩnh Gia',
        'Huyện Triệu Sơn',
        'Huyện Vĩnh Lộc',
        'Huyện Yên Định',
      ],
},
    {
      city: 
      'Thừa Thiên - Huế',
      district:  [
        'Thành phố Huế',
        'Thị xã Hương Thủy',
        'Huyện A Lưới',
        'Huyện Nam Đông',
        'Huyện Phong Điền',
        'Huyện Phú Lộc',
        'Huyện Phú Vang',
        'Huyện Quảng Điền',
      ],
},
    {
      city: 
      'Tiền Giang',
      district:  [
        'Thành phố Mỹ Tho',
        'Thị xã Gò Công',
        'Thị xã Cai Lậy',
        'Huyện Cái Bè',
        'Huyện Châu Thành',
        'Huyện Chợ Gạo',
        'Huyện Gò Công Đông',
        'Huyện Gò Công Tây',
        'Huyện Tân Phú Đông',
        'Huyện Tân Phước',
      ],
},
    {
      city: 
      'Trà Vinh',
      district:  [
        'Thành phố Trà Vinh',
        'Huyện Càng Long',
        'Huyện Cầu Kè',
        'Huyện Cầu Ngang',
        'Huyện Châu Thành',
        'Huyện Duyên Hải',
        'Huyện Tiểu Cần',
        'Huyện Trà Cú',
      ],
},
    {
      city: 
      'Tuyên Quang',
      district:  [
        'Thành phố Tuyên Quang',
        'Huyện Chiêm Hóa',
        'Huyện Hàm Yên',
        'Huyện Lâm Bình',
        'Huyện Na Hang',
        'Huyện Sơn Dương',
        'Huyện Yên Sơn',
      ],
},
    {
      city: 
      'Vĩnh Long',
      district:  [
        'Thành phố Vĩnh Long',
        'Quận Bình Tân',
        'Huyện Bình Minh',
        'Huyện Long Hồ',
        'Huyện Mang Thít',
        'Huyện Tam Bình',
        'Huyện Trà Ôn',
        'Huyện Vũng Liêm',
      ],
},
    {
      city: 
      'Vĩnh Phúc',
      district:  [
        'Thành phố Vĩnh Yên',
        'Thị xã Phúc Yên',
        'Huyện Bình Xuyên',
        'Huyện Lập Thạch',
        'Huyện Sông Lô',
        'Huyện Tam Đảo',
        'Huyện Tam Dương',
        'Huyện Vĩnh Tường',
        'Huyện Yên Lạc',
      ],
},
    {
      city: 
      'Yên Bái',
      district:  [
        'Thành phố Yên Bái',
        'Thị xã Nghĩa Lộ',
        'Huyện Lục Yên',
        'Huyện Mù Cang Chải',
        'Huyện Trạm Tấu',
        'Huyện Trấn Yên',
        'Huyện Văn Chấn',
        'Huyện Văn Yên',
        'Huyện Yên Bình',
      ]
    }]
  public districts: string[] = ['Quận Huyện'];
  ngOnInit() {
  }
  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }
    this.districts =
      this.data.find((data) => data.city === city)?.district || [];
  }
}
