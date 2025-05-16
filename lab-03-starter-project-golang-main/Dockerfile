FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o app

FROM gcr.io/distroless/static
COPY --from=builder /app/app /
CMD ["/app"]