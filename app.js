import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto("https://login.kku.ac.th/login");

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box
    await page.type("#username", process.env.KKU_USERNAME);
    await page.type("#password", process.env.KKU_PASSWORD);
    // Wait and click on first result

    await page.$eval("button.btn.btn-info", (form) => form.click());
    await page.waitForNavigation();
    // Print the full title
    await console.log("✅ Logged In.");

    await browser.close();
  } catch (e) {
    throw new Error("🛑 You already logged in.");
  }
};

connect();
