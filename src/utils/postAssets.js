import dummy from "../assets/dummy.jpg";
import thumbnail from "../assets/thumbnail.jpg";

const postImages = {
  "dummy.jpg": dummy,
  "thumbnail.jpg": thumbnail,
};

export function getPostImage(imageName) {
  return postImages[imageName] ?? dummy;
}
