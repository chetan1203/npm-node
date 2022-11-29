# from image postgres 13.1
FROM	postgres:13.1

# make directory for docker workspace
RUN	mkdir /DOCKERTASK

# working directory of docker
WORKDIR	/DOCKERTASK

# environment variable for postgres 
ENV	POSTGRES_PASSWORD password
ENV	POSTGRES_HOST localhost
ENV	POSTGRES_USER postgres
ENV POSTGRES_DB dbname

# expose use of port 
EXPOSE	5432

# copy the dockerdump.tar file for container
#COPY	dockerdump.tar ./

# copy the docker dump in database 
COPY	restore_db.sh /docker-entrypoint-initdb.d/restore_db.sh

