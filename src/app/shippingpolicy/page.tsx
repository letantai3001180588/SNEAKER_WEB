import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
     <Breadcrumb
        pageName="Shopping Policy"
      />
    <section
      className="mx-auto max-w-4xl"
    >
      <div className="container">
      <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Thời gian giao hàng</h2>
      <ul className="list-disc list-inside">
        <li>Nội thành TP.HCM: 1-2 ngày làm việc.</li>
        <li>Khu vực lân cận TP.HCM (Tây Ninh, Bình Dương, Đồng Nai): 2-3 ngày làm việc.</li>
        <li>Khu vực miền Nam: 3-5 ngày làm việc.</li>
        <li>Khu vực miền Trung: 4-6 ngày làm việc.</li>
        <li>Khu vực miền Bắc: 5-7 ngày làm việc.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Phí giao hàng</h2>
      <ul className="list-disc list-inside">
        <li>Miễn phí giao hàng cho đơn hàng từ 500.000đ.</li>
        <li>Phí giao hàng cho đơn hàng dưới 500.000đ: 30.000đ.</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Lưu ý</h2>
      <ul className="list-disc list-inside">
        <li>Thời gian giao hàng có thể thay đổi tùy theo khu vực và tình hình giao thông.</li>
        <li>Cửa hàng sẽ liên hệ với khách hàng để xác nhận đơn hàng trước khi giao hàng.</li>
        <li>Khách hàng vui lòng kiểm tra kỹ sản phẩm trước khi thanh toán.</li>
      </ul>
    </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
