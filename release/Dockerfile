FROM eclipse-temurin:17-jre

ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

WORKDIR /app

COPY house.jar /app/

EXPOSE 7036

CMD ["java","-Dfile.encoding=UTF-8", "-jar", "/app/house.jar"]