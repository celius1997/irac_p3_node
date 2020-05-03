FROM python:3.7-stretch

WORKDIR /home/server2

COPY index3.html .
COPY layout_base.css .
ADD encrypted ./encrypted

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3001

CMD python -m http.server 3001