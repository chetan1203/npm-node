#!/bin/bash
if pg_restore -d "$POSTGRES_DB" < /tmp/dockerdump.tar ; then echo database is restored ; else echo "data base is not restored" ; fi 	
