import "./GetAdded.scss";

export default function GetAdded() {
  return (
    <>
      <main className="added">
        <h2 className="added__header">Submit a Shop</h2>
        <form className="added__form" action="">
          <label className="added__form-l" for="shop-name">
            Shop Name
          </label>
          <input
            className="added__form-i"
            type="text"
            id="shop-name"
            name="shop-name"
          />

          <label className="added__form-l" for="category">
            Category
          </label>
          <input
            className="added__form-i"
            type="text"
            id="category"
            name="category"
          />

          <label className="added__form-l" for="email">
            Email
          </label>
          <input
            className="added__form-i"
            type="email"
            id="email"
            name="email"
          />

          <label className="added__form-l" for="phone">
            Phone
          </label>
          <input className="added__form-i" type="tel" id="phone" name="phone" />

          <label className="added__form-l" for="address">
            Address
          </label>
          <input
            className="added__form-i"
            type="text"
            id="address"
            name="address"
          />

          <label className="added__form-l" for="about">
            About
          </label>
          <input
            className="added__form-i"
            type="text"
            id="about"
            name="about"
          />

          <label className="added__form-l" for="website-url">
            Website URL
          </label>
          <input
            className="added__form-i"
            type="url"
            id="website-url"
            name="website-url"
          />

          <label className="added__form-l" for="instagram-url">
            Instagram URL
          </label>
          <input
            className="added__form-i"
            type="url"
            id="instagram-url"
            name="instagram-url"
          />

          <label className="added__form-l" for="facebook-url">
            Facebook URL
          </label>
          <input
            className="added__form-i"
            type="url"
            id="facebook-url"
            name="facebook-url"
          />

          <label className="added__form-l" for="twitter-url">
            Twitter URL
          </label>
          <input
            className="added__form-i"
            type="url"
            id="twitter-url"
            name="twitter-url"
          />

          <label className="added__form-l" for="linkedin-url">
            LinkedIn URL
          </label>
          <input
            className="added__form-i"
            type="url"
            id="linkedin-url"
            name="linkedin-url"
          />

          <label className="added__form-l" for="consent">
            Consent
          </label>
          <div className="added__form-consent">
            <input
              className="added__form-i"
              type="checkbox"
              id="consent"
              name="consent"
            />
            <p className="added__form-t">
              By submitting this form, I authorize The Local Shop to display my
              shop's information and location publicly. I understand that this
              information will be accessible to users of The Local Shop platform
              and may be used to promote my business within the community. I
              consent to the use of my provided data for these purposes and
              acknowledge that I have the right to request the removal or update
              of my information at any time.
            </p>
          </div>
        </form>
      </main>
    </>
  );
}