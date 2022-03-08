const placeholder = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFsim7mJetzNBK672yN0qjry6QJot2drW_w&usqp=CAU";

export function getMovieImg(path, width) {
    return path 
    ? `http://image.tmdb.org/t/p/w${width}${path}` : placeholder;
} 