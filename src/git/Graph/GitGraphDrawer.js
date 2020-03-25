import {marge, radius, arcRadius} from "../../git-graph";

class GitGraphDrawer {

    constructor(commitData, canvas) {
        this.commitData = commitData;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.circleX = ((2 * this.commitData.level) - 1) * radius + this.commitData.level * marge;
        this.circleY = canvas.height / 2;
    }

    drawCommit() {
        this.drawCommitCircle();

        this.drawDirectChildLine();
        this.drawDirectParentLine();

        this.drawStartBranchesLine();
        this.drawFinishBranchesLine();

        this.drawOtherBranchesLine();
    }

    drawCommitCircle() {
        this.ctx.arc(this.circleX, this.circleY, radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();
    }

    drawDirectParentLine() {
        if (this.commitData.hasDirectParent) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.circleX, this.circleY - radius);
            this.ctx.lineTo(this.circleX, 0);
            this.ctx.stroke();
        }
    }

    drawDirectChildLine() {
        if (this.commitData.hasDirectChild) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.circleX, this.circleY + radius);
            this.ctx.lineTo(this.circleX, this.canvas.height);
            this.ctx.stroke();
        }
    }

    drawStartBranchesLine() {
        this.commitData.start.forEach(d => {
            this.drawHorizontalLine(d);

            if (this.commitData.level !== d.level) {
                this.ctx.beginPath();
                this.ctx.moveTo((((2 * d.level) - 1) * radius + d.level * marge), this.circleY - arcRadius);

                this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, 0);
                this.ctx.stroke();

                this.drawStartArc(d);
            }
        });
    }

    drawFinishBranchesLine() {
        this.commitData.finish.forEach(d => {
            this.drawHorizontalLine(d);

            if (this.commitData.level !== d.level) {
                this.ctx.beginPath();
                this.ctx.moveTo((((2 * d.level) - 1) * radius + d.level * marge), this.circleY + arcRadius);

                this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, this.canvas.height);
                this.ctx.stroke();

                this.drawFinishArc(d);
            }
        });
    }

    drawOtherBranchesLine() {
        this.commitData.branches.forEach(d => {
            this.ctx.beginPath();
            this.ctx.moveTo(((2 * d.level) - 1) * radius + d.level * marge, 0);
            this.ctx.lineTo(((2 * d.level) - 1) * radius + d.level * marge, this.canvas.height);
            this.ctx.stroke();
        });
    }

    drawHorizontalLine(data) {
        this.ctx.beginPath();

        if (this.commitData.level > data.level) {
            this.ctx.moveTo(this.circleX - radius, this.circleY);
            this.ctx.lineTo((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY);
        } else if (this.commitData.level < data.level) {
            this.ctx.moveTo(this.circleX + radius, this.circleY);
            this.ctx.lineTo((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY);
        }

        this.ctx.stroke();
    }

    drawStartArc(data) {
        this.ctx.beginPath();
        if (this.commitData.level > data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY - arcRadius, arcRadius, 0.5 * Math.PI, Math.PI, false);
        } else if (this.commitData.level < data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY - arcRadius, arcRadius, 0, 0.5 * Math.PI, false);
        }
        this.ctx.stroke();
    }

    drawFinishArc(data) {
        this.ctx.beginPath();
        if (this.commitData.level > data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY + arcRadius, arcRadius, Math.PI, 1.5 * Math.PI, false);
        } else if (this.commitData.level < data.level) {
            this.ctx.arc((((2 * data.level) - 1) * radius + data.level * marge) - arcRadius, this.circleY + arcRadius, arcRadius, 1.5 * Math.PI, 2 * Math.PI, false);
        }
        this.ctx.stroke();
    }
}

export default GitGraphDrawer;
