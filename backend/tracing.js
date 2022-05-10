const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');
const Resources = require("@opentelemetry/resources");
const SemanticConventions = require("@opentelemetry/semantic-conventions");
const InstrumentationHttp = require("@opentelemetry/instrumentation-http");
const InstrumentationExpress = require("@opentelemetry/instrumentation-express");

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
    resource: new Resources.Resource({
        [SemanticConventions.SemanticResourceAttributes.SERVICE_NAME]: process.env["OPTL_SERVICE_NAME"],
    }),
    traceExporter: new ZipkinExporter({
        url: process.env["URL"],
        serviceName : process.env["OPTL_SERVICE_NAME"]
    }),
    instrumentations: [
        new InstrumentationHttp.HttpInstrumentation(),
        new InstrumentationExpress.ExpressInstrumentation(),
    ],
});

sdk.start()