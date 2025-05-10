import { BorderedLayout } from "@/components";
import { MotionProject } from "./components";
import CreateMat from "./images/renry/CreateMat.png";
import Dashboard1 from "./images/renry/Dashboard1.png";
import InventoryManagement from "./images/renry/InventoryManagement.png";
import Login from "./images/renry/Login.png";
import PurchaseOrder from "./images/renry/PurchaseOrder.png";
import PurchaseOrderEntry from "./images/renry/PurchaseOrderEntry.png";
import RawMats from "./images/renry/RawMats.png";
import Requistition from "./images/renry/Requisition.png";
import RequisitionCreate from "./images/renry/RequisitionCreate.png";
import RequisitionCreate2 from "./images/renry/RequisitionCreate2.png";
import RequisitionList from "./images/renry/RequisitionList.png";
import RoleManagement from "./images/renry/RoleManagement.png";

import DFPAddProduct from "./images/dutyfreeph/AddProduct.png";
import DFPAdminProfile from "./images/dutyfreeph/AdminProfile.png";
import DFPAuditTrail from "./images/dutyfreeph/AuditTrail.png";
import DFPCategories from "./images/dutyfreeph/Categories.png";
import DFPContact from "./images/dutyfreeph/Contact.png";
import DFPCoupons from "./images/dutyfreeph/Coupons.png";
import DFPHome from "./images/dutyfreeph/Home.png";
import DFPItemDetails from "./images/dutyfreeph/itemDetails.png";
import DFPLogin from "./images/dutyfreeph/login.png";
import DFPManageOrders from "./images/dutyfreeph/ManageOrders.png";
import DFPProfile from "./images/dutyfreeph/Profile.png";
import DFPReports from "./images/dutyfreeph/Reports.png";
import DFPShop from "./images/dutyfreeph/Shop.png";
import DFPWebConfig from "./images/dutyfreeph/WebConfig.png";

import PollandLogin from "./images/polland/Login.png";
import PollandProducts from "./images/polland/Products.png";
import PollandCategories from "./images/polland/Categories.png";
import PollandBranches from "./images/polland/Branches.png";
import PollandExpenses from "./images/polland/Expenses.png";
import PollandNewSales from "./images/polland/NewSales.png";
import PollandSales from "./images/polland/Sales.png";

const MarqueeProjects = () => {
  return (
    <BorderedLayout delay={0.6} className="projects" disableBorder>
      <MotionProject
        name="Renry Daughtson Inc. ERP"
        description="Developed a comprehensive ERP System for Renry Daughtson Inc., handling full-stack development including frontend, backend, and database design. The system streamlines inventory management, purchase orders, requisitions, and role-based access control."
        link="#"
        image={[
          Login.src,
          CreateMat.src,
          Dashboard1.src,
          InventoryManagement.src,
          PurchaseOrder.src,
          PurchaseOrderEntry.src,
          RawMats.src,
          Requistition.src,
          RequisitionCreate.src,
          RequisitionCreate2.src,
          RequisitionList.src,
          RoleManagement.src,
        ]}
        serviceTags={["Full-Stack Development", "REST API", "Database Design"]}
      />
      <MotionProject
        name="Dutyfree Philippines"
        image={[
          DFPAddProduct.src,
          DFPAdminProfile.src,
          DFPAuditTrail.src,
          DFPCategories.src,
          DFPContact.src,
          DFPCoupons.src,
          DFPHome.src,
          DFPItemDetails.src,
          DFPLogin.src,
          DFPManageOrders.src,
          DFPProfile.src,
          DFPReports.src,
          DFPShop.src,
          DFPWebConfig.src,
        ]}
        link="https://shop.dutyfree.gov.ph/"
        description="A Shopping platform developed for Dutyfree Philippines, integrating store and admin functionalities to optimize retail and administrative operations. I handled the full-stack development, creating a seamless storefront for customers and a powerful admin panel for managing products, orders, and configurations."
        serviceTags={["Full-Stack Development", "REST API"]}
      />
      <MotionProject
        name="Polland ERP"
        image={[
          PollandLogin.src,
          PollandProducts.src,
          PollandCategories.src,
          PollandBranches.src,
          PollandExpenses.src,
          PollandNewSales.src,
          PollandSales.src,
        ]}
        description="Designed and implemented a full-stack ERP system for Polland, enabling efficient management of sales, products, branches, and expenses. The system was built as a monolithic application, ensuring streamlined operations and centralized control."
        link="#"
        serviceTags={["Full-Stack Development", "Monolithic"]}
      />
    </BorderedLayout>
  );
};

export default MarqueeProjects;
