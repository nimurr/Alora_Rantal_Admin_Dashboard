/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardHome from "../page/DashboardHome/DashboardHome";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import SignIn from "../page/Auth/SignIn/SignIn";
import Otp from "../page/Auth/Otp/Otp";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import PersonalInformationPage from "../page/PersonalInformation/PersonalInformationPage";
import SettingsPage from "../page/Settings/SettingsPage";
import PrivacyPolicyPage from "../page/PrivacyPolicy/PrivacyPolicyPage";
import TermsconditionPage from "../page/TermsCondition/TermsconditionPage";
import AboutUsPage from "../page/AboutUs/AboutUsPage";
import UsersPage from "../page/Users/UsersPage";
// import AddItemPage from "../page/AddItem/AddItemPage";
import Notification from "../component/Main/Notification/Notification";
import EditPersonalInformationPage from "../page/EditPersonalInformationPage/EditPersonalInformationPage";
// import AdminRoutes from "./AdminRoutes";
import EditPrivacyPolicy from "../page/EditPrivacyPolicy/EditPrivacyPolicy";
import EditTermsConditions from "../page/EditTermsConditions/EditTermsConditions";
import EditAboutUs from "../page/EditAboutUs/EditAboutUs";
import CategoriesPage from "../page/Categories/CategoriesPage";
import EditCategoriesBoxPage from "../page/EditCategoriesBox/EditCategoriesBoxPage";
import EventViewItemPage from "../page/EventViewItem/EventViewItemPage";
import EventItemsPage from "../page/Event/EventPage";
import WelcomePage from "../page/WelcomePage/welcomePage";
import SuggestionPage from "../page/Suggestion/suggestion";
import DonationPage from "../page/DonationPage/DonationPage";
import EditWelcomePage from "../page/EditWelcomePage/EditWelcomePage";
import AddCategoryPage from "../page/AddCategoryPage/AddCategoryPage";
import UsersRequest from "../page/Users/UserRequest";
import UserDetails from "../page/Users/UserDetails";
import UserRequestDetails from "../page/Users/UserRequestDetails";
import UserRequestList from "../page/Users/UserRequestList";
import UserRequestListDetails from "../page/Users/UserRequestListDetails";
import EventItemsPageTonamentDetials from "../page/Event/EventItemsPageTonamentDetials";
import EventItems from "../component/Main/Event/EventItems";
import EventItemsPageTonamentEdit from "../page/Event/EventItemsPageTonamentEdit";
import Earnings from "../page/Earnings/Earnings";
import Collaborator from "../page/Collaborator/Collaborator";
import CollaboratorDetails from "../page/Collaborator/CollaboratorDetails";
import Subscription from "../page/Subscription/Subscription";
import Personalinfo from "../page/ProfileInfo/Personalinfo";
import PersonalinfoEdit from "../page/ProfileInfo/PersonalinfoEdit";
import AllFaq from "../page/Faq/AllFaq";
import AllDocument from "../component/Main/AllDocument/AllDocument";
import Lawyera from "../page/Lawyer/Lawyera";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ApartmentCreatorCreate from "../page/Lawyer/ApartmentCreatorCreate";
import ApartmentOwner from "../page/ApartmentOwner/ApartmentOwner";
import Apartmentdetails from "../page/ApartmentOwner/Apartmentdetails";
import SubscriptionUserList from "../page/Subscription/SubscriptionUserList";
import ApartmentCreate from "../page/ApartmentCreate/ApartmentCreate";
import ApartmentCreateAddNew from "../page/ApartmentCreate/ApartmentCreateAddNew";
import ApartmentCreateDetials from "../page/ApartmentCreate/ApartmentCreateDetials";
import Agent from "../page/Agent/Agent";
import Agentcreate from "../page/Agent/Agentcreate";
import CaintenanceCrew from "../page/CaintenanceCrew/CaintenanceCrew";
import CaintenanceCrewCreate from "../page/CaintenanceCrew/CaintenanceCrewCreate";
import AllAdmins from "../page/Admins/AllAdmins";
import AllAdminsCreate from "../page/Admins/AllAdminsCreate";
import ApartmentList from "../page/ApartmentList/ApartmentList";
import ApartmentListDetails from "../page/ApartmentList/ApartmentListDetails";
import MonthlyBillStatment from "../page/MonthlyBillStatment/MonthlyBillStatment";
import MonthlyBillStatmentDetails from "../page/MonthlyBillStatment/MonthlyBillStatmentDetails";
import AllRoles from "../page/AllRoles/AllRoles";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes>
      // </AdminRoutes>
      // <PrivetRout1e>  
      <MainLayout />
      // </PrivetRout1e>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "roles",
        element: <AllRoles />,
      },
      {
        path: "apartment-owner",
        element: <ApartmentOwner />,
      },
      {
        path: "apartment-owner/apartment-details/:id",
        element: <Apartmentdetails />,
      },





      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },

      {
        path: "agent",
        element: <Agent />,
      },
      {
        path: "agent/create",
        element: <Agentcreate />,
      },

      {
        path: "maintenance-crew",
        element: <CaintenanceCrew />,
      },
      {
        path: "maintenance-crew/create",
        element: <CaintenanceCrewCreate />,
      },



      {
        path: "apartment-list",
        element: <ApartmentList />,
      },
      {
        path: "apartment-list/:id",
        element: <ApartmentListDetails />,
      },

      {
        path: "apartment-creator",
        element: <Lawyera />,
      },

      {
        path: "apartment-creator/create",
        element: <ApartmentCreatorCreate />,
      },


      {
        path: "apartment-create",
        element: <ApartmentCreate />,
      },
      {
        path: "apartment-create/:id",
        element: <ApartmentCreateDetials />,
      },

      {
        path: "apartment-create/create",
        element: <ApartmentCreateAddNew />,
      },
      {
        path: "admins",
        element: <AllAdmins />,
      },
      {
        path: "admins/create",
        element: <AllAdminsCreate />,
      },


      {
        path: "monthly-bill-statement",
        element: <MonthlyBillStatment />,
      },

      {
        path: "monthly-bill-statement/:id",
        element: <MonthlyBillStatmentDetails />,
      },



      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "subscription/user-list",
        element: <SubscriptionUserList />,
      },


      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "settings/personal-info",
        element: <Personalinfo />,
      },
      {
        path: "settings/personal-info/edit",
        element: <PersonalinfoEdit />,
      },
      {
        path: "settings/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/settings/edit-privacy-policy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/terms-conditions",
        element: <TermsconditionPage />,
      },
      {
        path: "/settings/edit-terms-conditions/:id",
        element: <EditTermsConditions />,
      },
      {
        path: "settings/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/settings/edit-about-us/:id",
        element: <EditAboutUs />
      },


    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "login",  // Remove the leading slash here
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  }

]);

export default router;
