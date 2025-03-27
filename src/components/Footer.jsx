export default function Footer() {
    return (
        <div>
            {/* 分隔線 */}
            <hr className="my-6 w-full border-t-2 border-blue-200 rounded-sm opacity-100" />
  
            <footer className="footer bg-[#444d60] text-white py-6">

                <div className="flex justify-evenly items-center w-full flex-row-reverse"> {/* 确保父容器使用 flex-row-reverse 来交换位置 */}
                    {/* 版權聲明 */}
                    <div className="footer-copyRight order-3"> {/* 使用 order 来确保版权信息在最后 */}
                        <p className="text-center text-gray-400 opacity-60">
                            © 2025 Copyright
                        </p>
                    </div>
  
                    {/* 聯絡我們 */}
                    <div className="footer-contactUs order-2"> {/* 控制顺序 */}
                        <p className="font-extrabold">CONTACT US : 02 2732 1104</p>
                        
                    </div>
  
                    {/* 追蹤我們 */}
                    <div className="footer-followUs order-1"> {/* 控制顺序 */}
                        <p className="font-extrabold">FOLLOW US</p>
                        <div className="flex items-center space-x-4">
                            <a href="#">
                                <img className="w-8 h-8" src="/images/nn-icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="#">
                                <img className="w-8 h-8" src="/images/nn-icon-instagram.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
  