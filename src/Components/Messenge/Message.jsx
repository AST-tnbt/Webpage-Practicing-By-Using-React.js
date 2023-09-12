import "./Message.css";

export default function Message() {
  return (
    <section className="message" id="contact">
      <h2 className="message__title">Need a Project?</h2>
      <p className="message__text">
        Let us know what you're looking for in an agency. We'll take a look and
        see if this could be the start of something beautiful.
      </p>
      <form>
        <div className="message__info">
          <input type="text" placeholder="Your Name" className="input__name" />
          <input
            type="text"
            placeholder="Your Email"
            className="input__email"
          />
          <input
            type="text"
            placeholder="Your Title"
            className="input__title"
          />
          <textarea
            rows={6}
            placeholder="Your Comment"
            className="input__comment"
          />
        </div>
        <button type="submit" className="message__btn">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}
