import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import QRCode from "qrcode.react";
import { useState } from "react";

const QRCodeGenerator = () => {
   const [text, setText] = useState("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
   };

   return (
      <div>
         <h2>QR Code Generator</h2>
         <input type="text" value={text} onChange={handleChange} placeholder="Enter text" />
         <br />
         {text && (
            <QRCode
               value={text}
               renderAs="svg"
               size={500}
               imageSettings={setting()}
               bgColor="#140000"
               fgColor="#ff0000"
               level="H"
            />
         )}
      </div>
   );
};

function App() {
   return <QRCodeGenerator />;
}

export default App;
library.add(fab, fas, far);

const setting = () => ({
   src: exampleImage(),
   height: 100,
   width: 100,
   excavate: true,
});

const exampleImage = () =>
   "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAHAAcAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgAMgAyAwEiAAIRAQMRAf/EABsAAAICAwEAAAAAAAAAAAAAAAAEAwUBAgcG/8QAORAAAQMDAgQCBgYLAAAAAAAAAQIDEQAEBRIhBhMxQSJRBxQyYXGBFRYjM0KRUlRjcoOSk6HB0fD/xAAbAQACAwEBAQAAAAAAAAAAAAACAwAEBgEFB//EACwRAAEDAQUIAAcAAAAAAAAAAAEAAgQRAwUSIVEUFTFBgZGh0QYWUnGx4fD/2gAMAwEAAhEDEQA/AOc3rGaW+Sw2UoHQTWLO0zTr4S5LY85EV6C3dt1pkXToT5ggimS2n2fXHST0G0mqjpbm5U8LQsgtccWZ6qsfx9z4QtwyOqkKA+cUnc4u8d8KH1qB9rUN6u0WzxXLb6iO51jamwy6lJi5WT796RthbzVnYg/i0qiwnD+QvMi3ZIvVMPPQ3bqWCEFwmEpUR0BO2rsSJ2ki6vcLkOG8omwy4U9eNHVd26F7NEiQgrEgqggmJA2EkzG1nf5HH3BftllLwEIdCfE3PUp8lR36jt51re5PIXbbQunFOraToS4tMr0Dokk9QO09OnSiMguGdEtsYMdlWiU9YvJ9lH9MUVjnPfpD8k0UGIaBHhOpVjaYO3t55dquCPxb00jENKM8jfzimXM4v8Sbcj3oqI5lCuzQ/dEVj3TJ7xiqrws7QCgaApUY0JEIaI+CK0uMXcAfZqR8DtQnKt99XyVW6MtbatuZ8zVMy5jDWh7KUtxyS6cNkCPAob/tAIqQYC86ru4PlrBpsZttOyFSfhP+KyM+4rZKkKPlpFC6+JP26e0oiSeSS+hnv1n/AL86KshlbmPuE/yiik73k6+AhxW2gXMcL9a+KsfeZHhTh8P2tq5y3FOXhK0qCNcadQmQRHv2qZ3FektiyVcPcIOpSoEhfPjlwT7YK+4BI6bQe4nxPBVzwrbWF0zxJ9YUPuXDS2HcY8EBptM65BUAVKkQY20e/azvMhwH6hy7W741XcKLQ1XFykobAW2VwlKvEY58TtKh8a+sC7Y4GHD5PtZs3pKJri/C9haY/i61u2Wc/wALXVkl9wtpd9aGhtQQtakr8RIIS2okdYHeRMzjOatsdcZG64XzVvaMMl9TwW2tPKESv2pjcdu4rzN7mPRncvJdZRxxaKRcKeb0XoWpErlI1KWTKUkjUIJ3PU1AL30bKsU27rnG61loJcdL6CT4RKAkqgI1DoZnbsKrWlzRnmpB7n2nsvmU0Ur4Vlaca4MqKjcX7J8lpkf2mnE8b4YpUv6QVt2U2qT8BFcvzoxhyjxwiLxOP8PKTdqSp0eEapKdjvMe6KUAPmRVd/w5CfmQnNvy3HEA9F1U8f4uT9tcH+Cf90VyrxedFB8swPp/uym/LfQdv2nnwNath1qGBHQUUVoRwXiHistgaugraBqO1FFcXQswJOwqNQE9KKKi6taKKKii/9k=";
