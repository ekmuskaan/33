using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Web.Services;
using ToDo_Application;
using ToDo_Application.Model;
using Newtonsoft.Json;
using MongoDB.Bson;
using System.Web.Script.Services;

namespace ToDo_Application.Views
{
    public partial class Index : System.Web.UI.Page
    {

        #region Private Variables
        static DbUtility oDAL = new DbUtility();
        static string sResult = string.Empty;
        #endregion

        [WebMethod]
        public static bool saveItem(string ItemObj)
        {
            return oDAL.SaveDocument(ItemObj, "Item");

        }


        [WebMethod]
        public static bool addToCart(string CartItemObj)
        {
            return oDAL.SaveDocument(CartItemObj, "CarItem");

        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public static string getAllProducts()
        {
            return oDAL.GetAllDocumentsWithObjectId("Item");
        }

        //[WebMethod]
        //[ScriptMethod(UseHttpGet = true)]
        //public static long getCartProducts()
        //{
        //    return oDAL.GetCountOfCollection("CarItem");
        //}

        
    }
}