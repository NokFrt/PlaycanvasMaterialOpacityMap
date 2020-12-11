export class Game {
    /**
     * (RO) pc.Application
     */
    static get app(): pc.Application { return Game._app; }
    private static _app: pc.Application;

    //-------------------------------------------------------------------------
    //-------------------------------------------------------------------------
    constructor(canvasID: string) {
        // Create the app and start the update loop
        let canvas = document.getElementById(canvasID) as HTMLCanvasElement;
        let app = new pc.Application(canvas, {});

        // Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
        app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
        app.setCanvasResolution(pc.RESOLUTION_AUTO);

        window.addEventListener("resize", function () {
            app.resizeCanvas(canvas.width, canvas.height);
        });

        // Load a texture
        let url = "assets/textures/circle.png";

        app.assets.loadFromUrl(url, "texture", function (err: string, asset: pc.Asset) {
            app.start();

            // Camera
            let camera = new pc.Entity("camera");
            camera.addComponent(pc.eCompomentType.camera, {
                fov: 75,
                nearClip: 0.1,
                farClip: 500,
                clearColor: new pc.Color(0, 0, 0),
                frustumCulling: false
            });
            camera.setEulerAngles(-10, 0, 0);
            camera.setPosition(0, 3, 5);
            app.root.addChild(camera);

            // Floor
            let mat = new pc.StandardMaterial();
            mat.diffuse.set(0, 0, 0);
            mat.emissive.set(0.75, 1, 1);
            mat.useLighting = false;
            mat.update();

            let floor = new pc.Entity();
            floor.addComponent(pc.eCompomentType.model, {
                type: pc.eModelType.plane,
                material: mat,
                castShadows: false,
                receiveShadows: false,
            });
            floor.setLocalScale(4, 1, 4);
            app.root.addChild(floor);

            // Circle
            mat = new pc.StandardMaterial();
            mat.blendType = pc.BLEND_NORMAL;
            mat.diffuse.set(0, 0, 0);
            mat.emissive.fromString("#99cccc");
            mat.opacityMap = asset.resource;
            mat.useLighting = false;
            mat.update();

            let circle = new pc.Entity();
            circle.addComponent(pc.eCompomentType.model, {
                type: pc.eModelType.plane,
                material: mat,
                castShadows: false,
                receiveShadows: false,
            });
            circle.setPosition(0, 0.015, 0);
            circle.setLocalScale(0.75, 1, 0.75);
            app.root.addChild(circle);
        });
    }
}



window.addEventListener("DOMContentLoaded", () => {
    new Game("renderCanvas");
});