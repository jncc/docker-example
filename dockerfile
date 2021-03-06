
# this builds a web server!

FROM ubuntu:16.04

RUN apt-get update && apt-get install -y nodejs

COPY server.js server.js

CMD ["nodejs", "server.js"]
