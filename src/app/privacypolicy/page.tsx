import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
     <Breadcrumb
        pageName="Privacy Policy"
      />
    <section
      className="mx-auto max-w-4xl"
    >
      <div className="container">
      <div className="px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Loại thông tin thu thập</h2>
      <ul className="list-disc list-inside">
        <li>Thông tin cá nhân: Tên, email, số điện thoại, địa chỉ.</li>
        <li>Thông tin thanh toán: Số thẻ tín dụng, thông tin tài khoản ngân hàng.</li>
        <li>Thông tin sử dụng website: Lịch sử truy cập, trang web đã xem, sản phẩm đã xem.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Mục đích sử dụng thông tin</h2>
      <ul className="list-disc list-inside">
        <li>Cung cấp dịch vụ và hỗ trợ khách hàng.</li>
        <li>Cải thiện trải nghiệm người dùng.</li>
        <li>Gửi thông tin khuyến mãi và quảng cáo.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Chia sẻ thông tin</h2>
      <ul className="list-disc list-inside">
        <li>Cửa hàng không chia sẻ thông tin cá nhân của khách hàng với bên thứ ba nào khác.</li>
        <li>Thông tin có thể được chia sẻ với các nhà cung cấp dịch vụ để thực hiện các chức năng nhất định (như thanh toán, vận chuyển).</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Bảo mật thông tin</h2>
      <ul className="list-disc list-inside">
        <li>Cửa hàng sử dụng các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ thông tin khách hàng.</li>
        <li>Khách hàng có quyền truy cập, chỉnh sửa và xóa thông tin cá nhân của mình.</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Liên hệ</h2>
      <ul className="list-disc list-inside">
        <li>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với cửa hàng qua email hoặc số điện thoại.</li>
      </ul>
    </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
