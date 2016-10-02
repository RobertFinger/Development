using System.Web;
using System.Web.Optimization;

namespace Development
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {


			bundles.UseCdn = true;

			var jqueryCdnPath = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js";
			var jqueryBundle = new ScriptBundle("~/bundles/jquery", jqueryCdnPath).Include("~/Scripts/jquery-{version}.min.js");
			jqueryBundle.CdnFallbackExpression = "window.jquery";

			var jqueryUICdnPath = "http://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/jquery-ui.min.js";
			var jqueryUIBundle = new ScriptBundle("~/bundles/jquery-ui", jqueryUICdnPath).Include("~/Scripts/jquery-ui-{version}.min.js");
			jqueryBundle.CdnFallbackExpression = "window.jquery-ui";


			//var jqueryThemeCdnPath = "http://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/themes/cupertino/jquery-ui.css";
			//var jqueryThemeBundle = new ScriptBundle("~/bundles/jquery-ui", jqueryUICdnPath).Include("~/Scripts/jquery-ui-{version}.min.js");
			//jqueryBundle.CdnFallbackExpression = "window.jquery-ui";


			bundles.Add(jqueryBundle);
			bundles.Add(jqueryUIBundle);
			//bundles.Add(jqueryThemeBundle);



			//         // Use the development version of Modernizr to develop with and learn from. Then, when you're
			//         // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					  "~/Scripts/bootstrap.js",
					  "~/Scripts/respond.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/bootstrap.css",
					  "~/Content/site.css"));

			bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
			"~/Content/themes/base/jquery.ui.core.css",
					   "~/Content/themes/base/jquery.ui.resizable.css",
					   "~/Content/themes/base/jquery.ui.selectable.css",
					   "~/Content/themes/base/jquery.ui.accordion.css",
					   "~/Content/themes/base/jquery.ui.autocomplete.css",
					   "~/Content/themes/base/jquery.ui.button.css",
					   "~/Content/themes/base/jquery.ui.dialog.css",
					   "~/Content/themes/base/jquery.ui.slider.css",
					   "~/Content/themes/base/jquery.ui.tabs.css",
					   "~/Content/themes/base/jquery.ui.datepicker.css",
					   "~/Content/themes/base/jquery.ui.progressbar.css",
					   "~/Content/themes/base/jquery.ui.theme.css"));



			bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
			 "~/Content/themes/base/jquery.ui.core.css",
			 "~/Content/themes/base/jquery.ui.autocomplete.css",
			 "~/Content/themes/base/jquery.ui.theme.css"));


			BundleTable.EnableOptimizations = false;

		}
    }
}
